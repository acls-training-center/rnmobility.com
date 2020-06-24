
const products = {
    1: {
        "name": 'ACLS Certification Course',
        "price": '275.0'
    },
    2: {
        "name": 'ACLS Recertification Course',
        "price": '175.0'
    },
    3: {
        "name": 'PALS Certification Course',
        "price": '275.0'
    },
    4: {
        "name": 'PALS Recertification Course',
        "price": '175.0'
    },
    5: {
        "name": 'BLS Certification Course',
        "price": '85.0'
    },
    6: {
        "name": 'BLS Recertification Course',
        "price": '65.0'
    },
    21: {
        "name": 'Arrhythmia Interpretation Course',
        "price": '300.0'
    },
    22: {
        "name": '12-Lead Electrocardiography',
        "price": '300.0'
    },
    24: {
        "name": 'ICD-10 for Emergency Physicians',
        "price": '90.0'
    }
};

AnalyticActionType = {
    ADD : "add",
    REMOVE : "remove"
};

function sendSingleProductAnalyticEvent(id, action) {
    gtag('ec:addProduct', {
        'id': 'course_' + id,
        'name': products[id]['name'],
        'price': products[id]['price'],
        'quantity': '1'
    });
    gtag('ec:setAction', action);
    gtag('event', 'UX', 'click', action);
}

function sendProductsAnalyticEvent(products_ids, action) {
    products_ids.forEach(function (id) {
        sendSingleProductAnalyticEvent(id, action)
    });
    return true;
}
