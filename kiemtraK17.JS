// 1 //Hãy thêm 1 phần tử vào cuối array sau
var array = [0, 1, 2];

 // Code ở đây
 array[array.length -1]= 1
//-------------------------------------------------

// 2 // Hãy thêm 1 phần tử vào object sau

var object = {
  name: "Nodemy",
  address: "Thanh Xuan - Ha Noi",
};

// code vào đây
object.key = 'them key'
//-------------------------------------------------

// 3 // viết function tong tính tổng các số trong array

var array3 = [1, 5, 6, 7, "a", 2, "b", 6];

function tong(array) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] = Number){
      //tạo 1 biến tổng = 0
      var s = 0;
      s += array[i]
    }else{
      continue
    }
return s
  } //code vao day
}

//-------------------------------------------------

// 4 // hãy viết function kiểm tra 1 số có là số nguyên tố hay k
// nếu là số nguyên tố thì trả về true, nếu không trả về false
// số nguyên tố là số chỉ chia hết cho 1 và chính nó

function kiemTraSoNguyenTo(number) {
  //
  var flag = true
  //xét số nguyên
  flag = Number.isInteger(number)
  //xét số dương và 1 không phải là số nguyên tố nên xét bắt đầu từ 2
  if(number<2){
    flag = false
  }else if(number === 2){
    flag = true
  }else {
    for (let i = 2; i < number; i++) {
      if(number %i === 0){
        flag = false;
        break;
      }
    }
    
  } return flag // code vào đây
}

//-------------------------------------------------

// 5 // hãy viết function có đầu vào là 2 số nguyên dương number1 và number2
// function trả ra số nguyên tố lớn nhất trong khoảng giá trị number1 và number2
// nếu không tìm được trả về 'không có'

function timSoNguyenTo(number1, number2) {                        //em chịu
  var a                                                           //em chịu
  a= Number.isInteger(number1) && Number.isInteger(number2)       //em chịu
  if (a == true) {                                                //em chịu
      if (number1<1 && number2<1) {                               //em chịu
          if(number1<number2){                                    //em chịu
            for (let i = number1 + 1 ; i < number2; i++) {        //em chịu
                if(i === 2){                                      //em chịu
                  maxSNT = 2                                      //em chịu
                  }else {                                         //em chịu
                    for (let j = 2; j < i; j++) {                 //em chịu
                      if(i%j !== 0){                              //em chịu
                          maxSNT = i                              //em chịu
                      }                                           //em chịu
                      else{                                       //em chịu
                        console.log('không có');                  //em chịu
                      }
                    }
                }
           }
  } 
    
  }
  // code vào đây
}
return maxSNT
}
console.log(timSoNguyenTo(1,3));  


// 6 // hãy viết function tính tích các số trong array

var array6 = [1, 5, 6, 7, "a", 2, "b", 6];
function tinhTich(array) {
    var tich =1
  for (let i = 0; i < array.length; i++) {
    if(typeof array[i]!== "number"){ // xác định kiểu dữ liệu 
      continue
    }else{
      tich *= array[i] 
    }
  }
  return tich
  // code vao day
}
console.log(tinhTich(array6));

//-------------------------------------------------

// 7 // hãy dùng vòng lặp for viết function sắp xếp array đầu vào theo chiều tăng dần

function tangDan(array) {
  // cần 1 biến i, 1 biến so sánh j tìm giá trị lớn nhất sau i để gán vào i
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[i] > array[j]){
        // đổi chỗ i và j
        var a = array[i]
        array[i] = array[j]
        array[j] = a
      }
    }
  }
  return array
  // code
}

//-------------------------------------------------

// 8 // viết function có đầu vào là 1 string, ký tự tìm kiếm a và ký tự thay thế b
// Thay thế tất ký tự a trong string bằng ký tự b và trả ra string mới
// Hãy thay thế các dấu '/' trong string date sau bằng dấu '-'

var date = "15/9/2021";

function thayThe(string, a, b) {
  var newS =""
  for (let i = 0; i < string.length; i++) {
    
    //Thay a vào b
    if(string[i] !== a){
        newS += string[i]
    }else{
      newS += b
    }
  }
  return newS
  // code vào đây
}
console.log(thayThe(date, "/" , "-"));

//-------------------------------------------------

// 9 // hãy dùng vòng lặp for viết function có đầu vào là 1 array và 1 value là string hoặc number
// function kiểm tra xem array có chứa value hay không ( so sánh === )
// nếu array có value thì trả về true, nếu không trả về false

function kiemTra(array, value) {
  var ketqua
  for (const x of array) {
    if(x === value){
      ketqua = true
      break
    }else{
      ketqua = false
    }
  }
  return ketqua
  // code vào đây
}

//-------------------------------------------------

// 10 //  
// trả ra array mới có các phần tử không bị lặp lại
// [1, 2, 3, 1, 2, 3, "a", "a", "b", 4, 3, 5] => [1, 2, 3, "a", "b", 4, 5];
var array9 = [1, 2, 3, 1, 2, 3, "a", "a", "b", 4, 3, 5];

function locTrung(array) {
  var newS = []
  for (var i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[i] === array[j] && i !== j){
        delete array[i]
      }
    }
    return array
  }
  //code
}                                                // FAIL

module.exports = {
  array,
  object,
  tong,
  kiemTraSoNguyenTo,
  tinhTich,
  tangDan,
  locTrung,
};
