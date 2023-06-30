import React, { useState } from "react";
import { useSelector } from "react-redux";

import { backend_url } from "../../Server";
import { AiOutlineArrowRight, AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/styles";

const ProfileContent = ({ active, setActive }) => {
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [phone, setPhoneNumber] = useState();
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState();

  const [address2, setAddress2] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user.avatar}`}
                alt=""
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="email"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Mobile Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={phone}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Address 1</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%]`}
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/* Orders*/}
      {active === 2 && 
      <div className="">
        <AllOrder/>
        </div>}
    </div>
  );
};

const AllOrder = () => {
    const order = [{
        _id: "adasdasdaw3retrwtr",
        orderItems:[
            {
                name:"Iphone 14 pro max"
            },
        ],
        totalPrice: 120,
        orderStatus: "Processing",
    }]
    const columns = [
        {field:"id", headerName:"Orider ID", minWidth:150, flex:0.7},
        {
            field:"status",
            headerName: "Status",
            minWidth: 130,
            flex:0.7,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"? "greenColor": "redColor";
            },
            },
            {
                field:"itemsQty",
                headerName: "Items Qty",
                type: "number",
                minWidth: 130,
                flex:0.7
            },
            {
                field: "total",
                headerName: "Total",
                type: "number",
                minWidth: 130,
                flex:0.8,
            },
            {
                field: " ",
                flex:1,
                minWidth:150,
                headerName: "",
                type:"number",
                sortable:false,
                renderCell: (params) => {
                    return (
                        <>
                        <Link to={`order/$params.id`}>
                            <button>
                                <AiOutlineArrowRight size={20} />
                            </button>
                        </Link>
                        </>
                    )
                }                
            }    
        
    ];

    const row = [];

    order && order.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: item.orderItems.length,
            total: "Php"  +order.totalPrice,
            status: item.orderStatus
        })
    })
    return (
        <div className="pl-8 pt-1"></div>
    )
}

export default ProfileContent;
