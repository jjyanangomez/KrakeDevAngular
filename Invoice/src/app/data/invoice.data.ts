import { Invoice } from "../model/Invoice";

export const invoiceData:Invoice={
    id:"001",
    company:{
        ruc:"1792285747001",
        name:"Clear Minds Consultores",
        address:{
            city:"Quito",
            principalStreet:"Juan Pablo Sanz",
            secondaryStreet:"Iñaquito",
            code:"N-57",
        },
    },
    customer:{
        id:"1105834079",
        name:"Juan",
        surname:"Yanangomez",
        address:{
            city:"Quito",
            principalStreet:"Juan Pablo Sanz",
            secondaryStreet:"Iñaquito",
            code:"N-57",
        },
    },
    items:[
        {
            id: 100,
            product:{
                id:500,
                name:"Papas Rufles",
                price:0.50,
                description:"Las papas más sabrosonas",
                category:{
                    id:1,
                    name:"Frituras"
                }
            },
            quantity:23,
        },
        {
            id: 101,
            product:{
                id:501,
                name:"Kachitos",
                price:0.30,
                description:"Para kchudos",
                category:{
                    id:1,
                    name:"Frituras"
                }
            },
            quantity:100,
        },
        {
            id: 102,
            product:{
                id:502,
                name:"Doritos",
                price:0.60,
                description:"Sabor a Queso",
                category:{
                    id:1,
                    name:"Frituras"
                }
            },
            quantity:50,
        }
    ],
};