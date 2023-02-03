let randomNumber = Math.round(Math.random(0,1) * 100); 
let so 

do
{
    so = prompt("Nhập vào số bí ẩn");
    if(so == randomNumber)
        {
            alert('Bạn đã đoán đúng');
        }
    else if( randomNumber < so)
    {   
        alert('Số bạn nhập nhỏ hơn số bí ẩn');
    }
    else{
        alert('Số bạn nhập lớn hơn số bí ẩn');
    }
}
while(randomNumber != so)
