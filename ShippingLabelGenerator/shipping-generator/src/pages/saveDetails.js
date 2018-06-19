export function saveDetails(detail) {
    return function () {
        let api = "http://localhost:8181/details";
        fetch(api, {
            method: "POST",
            body: JSON.stringify(detail),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resp => resp.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
    }
}

