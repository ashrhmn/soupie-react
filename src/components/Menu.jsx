import React from 'react'
import MenuItem from './MenuItem'
import itemImg from '../PNG/itemImg.png'

function Menu() {
    const menuItems = [
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        },
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        },
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        },
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        },
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        },
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        },
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        },
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        },
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        },
        {
            name:"Svampsoppa (inkl. dryck + bröd)",
            subname:"Svamp & Spenat",
            image:itemImg,
            count:1,
            price:99
        }
    ]
    return (
        <div className="pt-28 pb-28">
            <h1 className="text-primary text-5xl font-extrabold">Menu</h1>
            {menuItems.map(item=><MenuItem item={item} key={item.name}/>)}
        </div>
    )
}

export default Menu
