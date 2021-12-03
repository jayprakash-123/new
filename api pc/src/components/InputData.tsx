import { useState } from 'react';
function AddData(props: any) {
    let [enteredId, setEnteredId] = useState('');
    let [entereduserId, setEntereduserId] = useState('');
    let [enteredTitle, setEnteredTitle] = useState('');
    const idEventHandler = (event: any) => {
        setEnteredId(event.target.value);
    }
    const userIdEventHandler = (event: any) => {
        setEntereduserId(event.target.value);
    }
    const titleEventHandler = (event: any) => {

        setEnteredTitle(event.target.value);
    }
    const submitHandler = (event: any) => {
        event.preventDefault();
        const album = {

            id: enteredId,
            userId: entereduserId,
           title: enteredTitle
        };
        props.AddData(album);
        props.onSaveEmployeeData(album);

        setEnteredId('');
        setEntereduserId('');
        setEnteredTitle('');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            <div className="flex pl-50">
                
            <label className="block text-white text-sm font-bold mb-2">Id :</label>
                <div className="flex justify-center">
                       <input  type='text' placeholder="enter id" value={enteredId} onChange={idEventHandler}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="id" />
                
                </div><br/>
                <div className="flex pl-50">
                <label className="block text-white text-sm font-bold mb-2">userId :</label>
                <div className="flex justify-center">
                    <input type='text' placeholder="enter userid" value={entereduserId} onChange={userIdEventHandler}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="userId"  />
                </div>
                </div><br/><br/>
                <div className="flex pl-50">
                <label className="block text-white text-sm font-bold mb-2" >Title :</label>
                <div className="flex justify-center">
                    <input type='text' placeholder="Add title" value={enteredTitle} onChange={titleEventHandler}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="title"  />
                </div>
                </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-16 rounded-full">
                        Add
                    </button>
                </div>
                
                    
                    
            </form>
        </div >
    );
} export default AddData;

