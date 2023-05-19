// let randomNumber = Math.round(Math.random(0,1) * 100); 
// let so 

// do
// {
//     so = prompt("Nhập vào số bí ẩn");
//     if(so == randomNumber)
//         {
//             alert('Bạn đã đoán đúng');
//         }
//     else if( randomNumber < so)
//     {   
//         alert('Số bạn nhập nhỏ hơn số bí ẩn');
//     }
//     else{
//         alert('Số bạn nhập lớn hơn số bí ẩn');
//     }
// }
// while(randomNumber != so)

function towerOfHanoi(n, fromRod, toRod, auxRod) {
    if (n === 1) {
      console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
      return;
    }
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
  }
  
  // Sử dụng hàm:
  towerOfHanoi(3, 'A', 'C', 'B'); // Di chuyển 3 đĩa từ cọc A sang cọc C, sử dụng cọc B làm cọc trung gian
  