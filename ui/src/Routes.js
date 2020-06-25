// file to group all the routes you use
export function getName() {
    return ('Alex')
    // const url = '/home/name'
    // fetch(url)
    //     .then(function (response) {
    //         response.json().then(function (res) {
    //             console.log(res)
    //         })
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     });
};

export function getJoke() {
    const url = '/randomJoke'
    fetch(url)
        .then((response) => {
            response.json().then(function (res) {
                console.log(res)
            })
        })
        .catch((err) => {
            console.log(err);
        });
}