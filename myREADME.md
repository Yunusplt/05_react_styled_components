### steps

- Style componentsin en güzel tarafi props gönderebilmek.
- aynisini bootstrapta classname üzerinden yapabilirim denemek lazim.

- images folder public icine kondu. 
- yolu bu sekilde <img src="./images/logo.png" alt="aa"/>
- <img src={`./images/${item.image}`} alt="" />  data'da img nin sadece ismi oldugu icin yolu böyle belirtiyoruz

- flex-direction: ${({reverse})=>(reverse || "row")};
- <CardStyle key={index} reverse={index%2===1 && "row-reverse"} >

