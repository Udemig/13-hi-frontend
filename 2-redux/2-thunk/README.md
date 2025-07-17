# Redux Thunk Nedir

- Redux için middleware'dir.
- Redux'un normal akışında dispatch sadece nesne parametresi alabilir
- - örneğin `dispatch({type:"INCREMENT"})`
- Ama bazen asenkron işlemler yapmak isteriz örneğin api veri çekmek gibi bir durumda thunk devreye girer
- Redux thunk sayesinde `dispatch` fonksiyonuna parametre olarak fonksiyon gönderebiliyoruz
- - Bu function asenkron işlemleri yaptıktan sonra normal `dispatch` çağrılarını gerçekleştirir
- - örneğin `dispatch(async function)`
