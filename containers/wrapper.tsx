import * as React from 'react';
import JSONTreeView from '../src/JSONTreeView';
export const Wrapper = ()=>{
    //var json = "simpleNode";

    // var json = [
    //     "id", "1004", "type","Devil's Food",['data1']
    // ];
    // var json = [
    //     { "id": "1001", "type": "Regular" },
    //     { "id": "1002", "type": "Chocolate" },
    //     { "id": "1003", "type": "Blueberry" },
    //     { "id": "1004", "type": "Devil's Food" }
    // ];
    var json = {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "batters":
            {
                "batter":
                    [
                        { "id": "1001", "type": "Regular" },
                        { "id": "1002", "type": "Chocolate" },
                        { "id": "1003", "type": "Blueberry" },
                        { "id": "1004", "type": "Devil's Food" }
                    ]
            },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    };
    return(
        <div className="container">
            <JSONTreeView json = {json}/>
        </div>
    )
}