/*hàm document.write() có tác dụng ghi biển ra bên ngoài console
Hàm promt(" ", '') có tác dụng đưa ra thông báo cho người dùng và nhận dữ liệu nạp vào
Hàm alert có tác dụng thông báo trên màn hình browser
Hàm setTimeout(function(){}, thời gian loops) huỷ hành động là clearTimeout();
Nếu muốn sử dụng hàm clearTimeout thì phải đặt setTimeout vào một biến cụ thể

*/

/*
 Khai báo string trong js không quá khác biệt so với C++
 Lưu ý nếu trong string có các giấu "" thì đặc biệt phải sử dụng thêm dấu''
 Các hàm có thể sử dụng để xử lý chuỗi trong JS
 indexOf():tìm kiếm vị trí
 lastIndexOf(): tìm kiếm vị trí cuối cùng của ký tự cần tìm
 search(): Liệt kê ra tất cả các vị trí mà tôi muốn tìm
 
 slice(start, end): cắt chuỗi trong khoảng kí tự từ start đến end
 Lưu ý: là string bắt đầu từ 0, và nếu tham số truyền vào là số âm thì chuỗi sẽ được tính từ dưới lên trên. Nếu bạn chỉ truyền một tham số thì nó sẽ tự hiểu đó là vị trí cuối cùng và nhận được chuỗi cắt ra từ 0 đến end

 substring(): có cách sử dụng giống với lice nhưng các tham số truyền vào phải là các số dương

 substr(): bao gồm 2 tham số là start và length để lấy giá trị từ start và lấy length số ký tự của chuỗi

 replace(str_find, str_replace): là hàm dùng để tim kiếm và thay thế các chuỗi có bên trong code

 toUpperCase() and toLowerCase(): là 2 hàm dùng để biến đổi chuỗi thành chuỗi in hoa hoặc là chuỗi in thường

 charAt(): tìm ký tự trong bảng mã ASCII
 charCodeAt():

 .split("").length: chuyển đổi chuỗi thành mảng các ký tự cách nhau bởi các khoảng trắng
 
 cách lặp lại hoặc in chuỗi ra qua từng ký tự cũng không có quá nhiều sự khác biệt so với C++

 Khai bảo mảng trong JS:
 var name_array = new Array();
 // Hoặc
 var name_array = new Array(1,2,3);

 Cách 2:
 var name_array = [];
 // Hoặc
 var name_array = [1,2,3];
 truy xuất các phần tử trong mảng name_array[pos]
 Để debug xem các giá trị trong mảng thì ta sử dụng hàm join() và console.log(). Hai hàm sẽ in toàn bộ giá trị của các phần tử ra màn hình.

 có thể sử dụng console.log() để in ra giá trị của mảng trong debug browser


 HÀM XỬ LÝ MẢNG

 array.valueOf(): tương tự như hàm join(); trả về lần lượt các giá trị trong mảng

 array.push(""): Hàm thêm một phần tử vào phía cuối array

 array.pop() xoá đi phần tử cuối cùng mảng

 array.shift(): xoá phần tử đầu tiên và đẩy thứ tự các phần tử lên 1 vị trí
 array.inshift() >< array.shift()

 splice(position_add, num_element_remove, value1, value2, ...).
 *position_add là vị trí sẽ thêm (vị trí đầu tiên là 0)
 *num_element_remove là số phần tử sẽ xóa (bắt đầu từ position_add)
 *value1, value2, .. là danh sách các phần tử sẽ được thêm vào sau khi tại vị trí 
 *position_add và sau khi xóa số lượng num_element_remove phần tử.
 
 array.sort(): Sắp xếp theo bảng chữ cái alphabet
 
 array.reverse():Dùng để đảo ngược các thành phần trong mảng

 array1.concat(array2): dùng để nối các phần tử của mảng 1 với mảng 2 và trả về một mảng 

 Mảng 2 chiều: ví dụ:
 var numbers = [
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21]
    ];
    Cách 2:
 var numbers = new Array(
    new Array(5, 12, 17, 9, 3),
    new Array(13, 4, 8, 14, 1),
    new Array(9, 6, 3, 7, 21)
 );
 bắt đầu từ số 0

 matrix.push([]): thêm vào hàng sau một số lượng

 Nếu muốn tạo ra một mảng gồm các số ngẫu nhiên từ 0 đến 10
 Math.floor((Math.random() * 10) + 1);


 ĐỐI TƯỢNG NUMBER
 Nếu là số mũ quá lớn có thể biểu diễn:
 123e5 = 12300000
 123e-5=0.00123

 hàm toString(n) để biến biến từ dạng number sang tring
 2: hệ nhị phân
 16: hệ thập lục phân
 8: hệ bát phân
 10: hệ thập phân

 Infinity: là kiểu dữ liệu khi một biến có giá tị ìninity là khi nó đã vượt mức giới hạn cho phép nên theo mặc định nó sẽ tự trở về giá trị đó

 NaN (Not a Number) là khi vi phạm tính toán với các biến number thì nó sẻ trả về giá trị NaN
 để kiểm tra giá trị đó có phải là NaN hay không thì sử dụng hàm isNaN()

 II) CÁC HÀM XỬ LÝ NUMBER TRONG JS

 Nhóm toàn cục:
 Number(type) trả về một number và định dạng type = (nhị phân, thập phân, thập lục phân)
 parseFloat() chuyển sang dạng float
 parseInt() chuyển sang một sô integer

 Nhóm cục bộ:

 toString() chuyển sang kiểu string
 toFixed(n) chuyển sang số có n số lẻ ở đằng sau
 toPrecision(n) chuyển sang số có chiều dài là n
 valueOf() lấy giá trị của biến hoặc một giá trị nào đó

 Number(): Hàm trả các giá trị như boolean, date, string sang dạng số
 

 ĐỐI TƯỢNG DATE TRONG JS

 Date giúp lập trình viên lấy được thời gian thực hiện tại ở máy khách client qua đó sẽ xử lý các chức năng cần đến thông số thời gian này

 Cú pháp khởi tạo
 // Cách 1
 var timeObj = new Date();
 var timeObj = new Date(value);
 var timeObj = new Date(dateString);
 
 // Cách 2
 var timeObj = new Date(year, monthIndex);
 var timeObj = new Date(year, monthIndex, day);
 var timeObj = new Date(year, monthIndex, day, hours);
 var timeObj = new Date(year, monthIndex, day, hours, minutes);
 var timeObj = new Date(year, monthIndex, day, hours, minutes, seconds);
 var timeObj = new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

 Cách sử dụng
 Cách 1: truyền vào tham số là chuỗi hoặc một giá trị
 dateString: là một chuỗi định dạng ngày tháng cần lấy
 value cũng có thể là một dãy số được chuyền từ ngày giờ lấy sang miliseconds
 Cách 2: Có tối đa 7 tham số truyền vào:

 year năm cần lấy
 monthIndex là tháng cần lấy
 day là ngày trong tháng cần lấy
 hours là giờ cần lấy
 minuites là phút cần lấy
 seconds là giây cần lấy

 Định dạng của Date trong Js
 có 3 định dạng chính đó là 
 *ISO: Định dạng chuẩn của ISO 8601 là (YYYY-MM-DD) hoặc (YYYY-MM) hoặc (YYYY).
 Lưu ý là nếu truyền thiếu tham số vào hàm thì mặc định nó sẽ chọn ra thông số nhỏ nhất
 *Long
 Định dạng Long tức là bạn truyền vào với tên của tháng là ba chữ cái đầu tiên ghi bằng tiếng Anh, lúc này bạn có thể đặt vị trí của nó thế nào cũng được vì đối tượng Date tự nhận diện và chuyển đổi.
 *Short
 Là định dạng dưới dạng ngày tháng năm cách nhau bằng dấu - hoặc dấu /
 Đối với người Việt Nam thì định dạng của date là khác so với tiêu chuẩn quốc tế
 do đó cần có một thủ thuật nhỏ giúp cho định dạng phù hợp với người Việt Nam

 function getDDMMYY(dateString){
 var dateParts = dateString.split("/");
 
 //tháng bắt đầu từ 0 nên ta phải giảm đi 1 dateParts[1]-1

 return new Date(+dateParts[2], dateParts[1]-1, +dateParts[0]);
 }
 getDDMMYYYY()

 CÁC HÀM XỬ LÝ NGÀY THÁNG

 Các nhóm hàm Date Get trong Javascript
 getDate(): hàm lấy ngày
 getDay();: hàm lấy ngày trong tuần
 getFullYear(): lấy năm đầy đủ
 getYear(): lấy 2 số cuối của năm
 getHours(): lấy số giờ
 getMiliseconds(): lấy số mili giây(0-999)
 getMinutes(): lấy số phút(0-59)
 getMonth(): lấy tháng(0-11)
 getTime() thời gian đã được convert sang dạng miliseconds
 Lưu ý hàm getDay() phải cộng thêm 1 ngày vì ngày bắt đầu từ 0

 Các nhóm hàm Date Get trong Javascript
 setDate() thiết lập ngày (1 - 31)
 setFullYear() thiết lập năm đầy đủ (YYYY)
 setYear() thiết lậpnăm 2 số cuối (YY)
 setHours() thiết lập số giờ (0 - 23)
 setMiliSeconds() thiết lập số mili giây (0 - 999)
 setMinutes() thiết lập số phút (0 - 59)
 setMonth() thiết lập tháng (0 - 11)
 setSeconds() thiết lập số giây (0 - 59)
 setTime() thiết lập thời gian đã được convert sang dạng miliseconds.
 Lưu ý nếu sử dụng hàm setTime() thì phải truyền tham số vào
 Các hàm có ảnh hưởng đến nhau đặc biệt là hàm setTime có thể làm thay đổi thời gian mặc định
 
 */

/* var numbers = [];
numbers.push([5, 12, 17, 9, 3]);
numbers.push([13, 4, 8, 14, 1]);
numbers.push([9, 6, 3, 7, 21]);
console.log(numbers);
var str_1 = "XuanPhuc, XuanDuc";
var str_2 = "XuanDuc, XuanPhuc";

document.write(str_1.concat(str_2))

var dtObj = new Date();

document.write("<br/>" + dtObj);

var dateShort = new Date("8/1/2021");
document.write("<br/>" + dateShort);

Sự kiện Event trong Js là các hành động tác động lên đối tượng HTML, qua đó ta có thể bắt được sự kiện và yêu cầu thực thi một chương trình nào đó
Mỗi sự kiện chúng ta có thể gán nhiều hành động. Ví dụ bạn có một sự kiện là tết âm lịch thì bạn sẽ có những hành động trong sự kiện đó là mua đồ mới dọn dẹp nhà cửa, mua bao lỳ xì

Xét về mặt thực tế ta có thể thí dụ: Giả sử bạn xây dựng đăng ký tài khoản và bạn muốn bắt sự kiện khi
người dùng click vào button thì hiện lên hành động như là

Như vậy ta có thể nhớ rằng sự kiện của Js có rất nhiều hành động mà bên trong
nó thì phụ thuộc vào từng chức năng cự thể


Cách thêm/ bắt các sự kiện trong JS

Chúng ta có hai cách cơ bản để bắt sự kiện, thứ nhất là code trực tiếp trong thẻ HTML, thứ 2 là sử 
dụng Js như chúng ta đã làm ở phần 1

Cách 2: Bắt sự kiện bằng Js thị bạn sử dụng cú pháp như sau:

elementObject.eventName  = function(){
    // do something
};
trong đó:
elementObject là đối tượng HTMl mà chúng ta sử dụng DOM để lấy
eventName là tên của event như onclick, onchange,... 
Để tạo ra các nút nhận sự kiện trên màn hình ta có thể sử dụng cú pháp
 <input type="button" id="show-btn" value="Click me" />

 Cách 3: Bắt sự kiện cho nhiều thẻ HTML bằng Js
 Trong Js trường hợp bạn muốn bắt sự kiện trên nhiều thẻ HTML có thể sử dụng vòng lặp

 Cú pháp cụ thể như sau
 var elementObjs = document.getElementsByTagName('element');
 
 // Lặp qua từng phần tử trong kết quả và gán sự kiện
 for (var i = 0; i < elementObjs.length; i++)
 {
    elementObjs[i].eventName = function()
    {
      // Do simething
    };
 }


 Sự kiện True False khác nhau với true false trong hàm như thế nào

 Đối với hàm thì nó trả về một giá trị boolean 
 Đối với sự kiện thì true và false là khi Js can thiệp vào HTML nếu trả về true thì
 sự kiện đó có thể được phép diễn ra nếu không thì sự kiện đó sẽ không được phép diễn
 ra
 Cách 1 là return ngay bên trong hàm HTMl 
 VD: <input type="text" onkeypress="return false" />
 Cách 2 là return tại cả file HTML và cả function của Js
 VD:
 <script language="javascript">
 function check()
 {
    return false; 
 }
 </script>
 <input type="text" onkeypress="return check()" />
 
 */


 function startTime() {
   var today = new Date();
   var h = today.getHours();
   var m = today.getMinutes();
   var s = today.getSeconds();
 
   m = checkTime(m);
   s = checkTime(s);
   document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;

   var t = setTimeout(function () {
     startTime();
   }, 500);
 }
 
 function checkTime(i) {
   if (i < 10) return "0" + 1;
   else return i;
 }
 
 function do_something() {
   alert('Bạn đã click vào nút này!');
 }
 
 function noti() {
   alert('Ban da click vao day');
 }
 
 function validate() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var re_password = document.getElementById("re-password").value;
   alert("Ban chua nhap ten");
   if (username == "") {
    
     return false;
   }
   else {
     if (password == "") {
       alert("Ban chua nhap mat khau");
       return false;
     }
     else {
       if (password != re_password) {
         alert("Ban da nhap sai pass");
         return false;
       }
       else
       {
         return true;
       }
     }
   }
 }


