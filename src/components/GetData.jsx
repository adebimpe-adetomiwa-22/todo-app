const GetData = () => {
    let fetchedData = localStorage.getItem('todo');

    if (fetchedData) {
        return JSON.parse(fetchedData);
    }

    localStorage.setItem('todo', JSON.stringify([]));
    return JSON.parse(localStorage.getItem('todo'));
};

export default GetData;
