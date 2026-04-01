
import Cartcreator from './Cartcreator';


const Cart = ({ cartCount, setcartCount }) => {
    let totalPrice = 0;

    for (const item of cartCount) {
        totalPrice += item.price.amount;
    }

    const clearCarts = () => {

        setcartCount([]);
    }


    return (
        <div className='w-full  min-h-100  mx-auto flex justify-center'>
            <div className='w-[70%] flex flex-col '>


                <div className='p-20 '>

                    {/* main card */}
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h1 className='font-bold'>Your Cart</h1>

                        </div>

                        {/* here will be all cart call */}
                        {cartCount.map((cart) => <Cartcreator cart={cart} cartCount={cartCount} setcartCount={setcartCount} />)}

                        {cartCount.length == 0 ? <h1 className='p-10 bg-gray-100 '>Your cart is empty!</h1> :
                            <>
                                <div className='flex justify-between mx-8 mt-5'>
                                    <h1 className='font-bold'>Total :</h1>
                                    <p className='font-semibold'>${totalPrice}</p>
                                </div>
                                <button className='btn btn-primary rounded-full mx-5' onClick={clearCarts}>Proceed to checkout</button>
                            </>
                        }


                    </div>


                </div>


            </div>


        </div>
    );
};

export default Cart;