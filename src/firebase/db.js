import {db, auth} from './firebase';

export function getUserMeta() {
    return new Promise(function(resolve, reject) {
        var uid = auth.currentUser.uid;
        db.ref(`/users/${uid}/meta`)
            .once('value', snapshot => {
                return resolve(snapshot.val());
            })
            .catch(e => {
                return reject(e);
            });
    });
}

export function saveUserMeta(whatField, val){
    return new Promise(function(resolve, reject) {
        var uid = auth.currentUser.uid;
        db.ref(`/users/${uid}/meta/${whatField}`).set(val)
    });
}