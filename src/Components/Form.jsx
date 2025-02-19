import React, { useState } from 'react'

function Form() {
    const data = {name: "", email: "", password: ""}

    const [inputData, setInputData] = useState(data)

    function handleData(e){
        setInputData(...inputData, [])
    }
  return (
    <div>
        <form action="" className="container">
            <div className="header">
                <img src="https://png.pngtree.com/template/20190826/ourmid/pngtree-smile-baby-cloud-shop-line-logo-design-template-inspiration-image_298536.jpg" alt="" />
            </div>
            <div>
            <label htmlFor="">Username</label>
                <input type="text"
                placeholder='Enter Your Username'
                name='name'
                value={inputData.name}
                onChange={handleData}
                />
            </div>
            <div>
            <label htmlFor="">Email</label>
                <input type="text"
                placeholder='Enter Your Email'
                name='email'
                value={inputData.email}
                onChange={handleData}
                />
            </div>
            <div>
            <label htmlFor="">Password</label>
                <input type="text"
                placeholder='Enter Your Password'
                name='password'
                value={inputData.password}
                onChange={handleData}
                />
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>

        </form>
    </div>
  )
}

export default Form