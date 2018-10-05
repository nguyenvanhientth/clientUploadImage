import RNFetchBlob from 'react-native-fetch-blob';
import ip from '../ip/ip';

let imageUpload = (data) => {
    return(
        RNFetchBlob.fetch('POST',ip, {
        Authorization : "Bearer access-token",
        otherHeader : "foo",
        'Content-Type' : 'multipart/form-data',
        },data)
    );
}
module.exports = imageUpload;