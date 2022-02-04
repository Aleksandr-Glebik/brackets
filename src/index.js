module.exports = function check(str, bracketsConfig) {
   /*  // console.log('str', str);
    if (str.length % 2 !== 0) {
        console.log('bad');
        return false
    } else {
    let arrForElemStr = str.split('')
    let length = arrForElemStr.length
    // console.log('arrForElemStr', arrForElemStr);
    let newArr = []
    let result = []
        for (let i = 0; i < length; i++) {
            // console.log('arrForElemStr[i]', arrForElemStr[i]);
        result = bracketsConfig.map((item) => {
                // console.log('item', item);
                let lastEl
                let index = item.indexOf(arrForElemStr[i])
                // console.log('index', index);
                if (index === 0) {
                    newArr.push(arrForElemStr[i])
                    // console.log('newArr', newArr);
                    if (index === 0 && newArr.length % 2 === 0) {
                        // console.log('good');
                        return true
                    }
                } else if (index === 1) {
                    // console.log('newArr.length', newArr.length);
                    if (newArr.length === 0) {
                        // console.log('bad');
                        return false
                    } else {
                        lastEl = newArr.pop()
                        // console.log('lastEl', lastEl);
                        // console.log('item.indexOf(lastEl)', item.indexOf(lastEl));
                        if (item.indexOf(lastEl) === 0) {
                            // console.log('good');
                            return true
                        } else {
                            // console.log('bad');
                            return false
                        }
                    }
                }
            })
        }
        // console.log('result.includes(true)', result.includes(true));
        if (result.includes(true)) {
            return true
        }
        return false
    } */
    let arrForElemStr = str.split('')
    let length = arrForElemStr.length
    // console.log('arrForElemStr', arrForElemStr);
    // console.log('length', length);
    if (length % 2 !== 0) {
        // console.log('bad');
        return false
    } else {
        // console.log('good');
        let newArr = []

        for (let i = 0; i < length; i++) {
            // console.log('i', i)
            let curentEl = arrForElemStr[i]
            // console.log('curentEl', curentEl)
            let index
            bracketsConfig.forEach((item) => {
                // console.log('item', item)
                index = item.indexOf(curentEl)
                // console.log('index', index)

                if (index === 0) {
                    newArr.push(curentEl)
                } else if (index === 1 && newArr.length !== 0) {
                    let lastElInNewArr = newArr.pop()
                    // console.log('lastElInNewArr', lastElInNewArr)
                    // console.log('item.indexOf(lastElInNewArr)', item.indexOf(lastElInNewArr))
                    if (item.indexOf(lastElInNewArr) === 1) {
                        // console.log('bad');
                        return false
                    } else if (item.indexOf(lastElInNewArr) === 0) {
                        // console.log('good');
                        return true
                    }
                } else if (index === 1 && newArr.length === 0) {
                    // console.log('bad');
                    return false
                }
            })
        }
        // console.log('newArr finish', newArr);
        if (newArr.length % 2 === 0) {
        if (newArr[0] === newArr[1]) {
            // console.log('good');
            return true
        } else {
        //    console.log('bad');
            return false
        }
        } else {
        // console.log('bad');
        return false
        }
    }

}
