import dynamicDataReducer, {
    addCodeSnippets,
    addData,
    resetData, setDataReadyFlag,
    setDynamicId,
    setQuantity,
    setType,
    updateElementName
} from "./dynamicDataReducer";

const state = {
    isDataReady: false,
    listOfTypes: ['Text', 'Boolean', 'Exit URL', 'Image URL', 'DateTime'],
    snippets: null,
    data: [
        {
            elementName: "Data",
            quantity: 1,
            selectedTypes: ["text", "text"],
            data: [["value_1_1", "value_1_2"], ["value_2_1", "value_2_2"]]
        },
        {
            elementName: "Data_2",
            quantity: 1,
            selectedTypes: ["text", "text"],
            data: [["value_3_1", "value_3_2"], ["value_4_1", "value_4_2"]]
        }
    ],
    dynamicId: ''
}

describe('Testing dynamic data reducer', () => {
    it('1. Should set the dynamic ID ==> handle SET_DYNAMIC_ID',
        () => {
            const action = setDynamicId('dynamic_ID');
            const newState = dynamicDataReducer(state, action);

            expect(newState.dynamicId).toBe('dynamic_ID');
        }
    );

    it('2. Should return the initial state ==> handle RESET_DATA_DYN_DATA',
        () => {
            const action = resetData();
            const newState = dynamicDataReducer(state, action);

            expect(newState.isDataReady).toBe(false);
            expect(newState.listOfTypes).toStrictEqual(['Text', 'Boolean', 'Exit URL', 'Image URL', 'DateTime']);
            expect(newState.snippets).toBeNull();
            expect(newState.data).toStrictEqual([]);
            expect(newState.dynamicId).toBe('');
        }
    );

    it('3. Should add the dynamic data ==> handle ADD_DATA',
        () => {
            const testData = [
                {element: "Data", data: [["elem_1_1", "elem_1_2"], ["elem_2_1", "elem_2_2"]]},
                {element: "Image", data: [["elem_3_1", "elem_3_2"], ["elem_4_1", "elem_4_2"]]}
            ];

            const resultObject = {
                elementName: testData[1].element,
                quantity: 1,
                selectedTypes: Array(testData[1].data[0].length).fill('text'),
                data: testData[1].data
            }

            const action = addData(testData);
            const newState = dynamicDataReducer(state, action);

            expect(newState.data.length).toBe(testData.length);
            expect(newState.data[1]).toStrictEqual(resultObject);
            expect(newState.data[0].elementName).toBe('Data');
            expect(newState.data[0].data.length).toBe(testData[0].data.length);
            expect(newState.data[1].data[1]).toBe(testData[1].data[1]);
        }
    );

    it('4. Should set selected types ==> handle SET_TYPE',
        () => {
            const typeObject = {
                rowIndex: 1,
                elementIndex: 0,
                typeValue: 'type_value'
            }
            const action = setType(typeObject);
            const newState = dynamicDataReducer(state, action);

            expect(newState.data[0].selectedTypes[1]).toBe('type_value');
        }
    );

    it('5. Should set quantity ==> handle SET_QUANTITY',
        () => {
            const action = setQuantity(1, 3);
            const newState = dynamicDataReducer(state, action);

            expect(newState.data[1].quantity).toBe(3);
        }
    );

    it('6. Should update element name ==> handle UPDATE_ELEMENT_NAME',
        () => {
            const action = updateElementName(1, 'New_element_name');
            const newState = dynamicDataReducer(state, action);

            expect(newState.data[1].elementName).toBe('New_element_name');
        }
    );

    it('7. Should add snippets Map ==> handle ADD_CODE_SNIPPETS',
        () => {
            const key = "|Data(value_1_1)";
            const value = {
                Data: [
                    {prop_1_1: "value_1_1", prop_1_2: "value_1_2"},
                    {prop_2_1: "value_2_1", prop_2_2: "value_2_2"}
                ]
            }
            const variants = new Map([[key, value]]);

            const action = addCodeSnippets(variants);
            const newState = dynamicDataReducer(state, action);

            expect(newState.snippets.has(key)).toEqual(true);
            expect(newState.snippets.get(key).Data.length).toBe(2);
        }
    );

    it('8. Should switch "isDataReady" property to value TRUE  ==> handle SET_DATA_READY_FLAG',
        () => {
            const action = setDataReadyFlag(true);
            const newState = dynamicDataReducer(state, action);

            expect(newState.isDataReady).toBe(true);
        }
    );
});