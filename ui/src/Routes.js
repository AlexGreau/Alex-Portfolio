// file to group all the routes you use
export function getName() {
    const url = '/home/name'
    fetch(url)
        .then(function (response) {
            response.json().then(function (res) {
                console.log(res)
            })
        })
        .catch(function (err) {
            console.log(err);
        });
};