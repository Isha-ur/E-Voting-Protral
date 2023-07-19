/*const states = [
    {        
      "id": "1",
      "name": "Andhra Pradesh",
      "cities": [
        
        { "name": "Telangana Rashtra Samithi",
         "symbol": "Car",
          "address": "House No. 8-2-220/110/1/3,Road No.14, Banjara Hills, Hyderabad,Andhra Pradesh-500034",
          "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Indian_Election_Symbol_Car.jpg/75px-Indian_Election_Symbol_Car.jpg",
          "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Bharat_Rashtra_Samithi_%28India_Nation_Council%29.png/270px-Flag_of_Bharat_Rashtra_Samithi_%28India_Nation_Council%29.png"
        },
        { "name": "Telugu Desam",
         "symbol": "Bicycle",
          "address": "Telugu Desam Party Office, N.T.R. Bhavan,Road No.2, Banjara Hills, Hyderabad-500033.(Andhra Pradesh)",
          "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Indian_Election_Symbol_Cycle.png/180px-Indian_Election_Symbol_Cycle.png",
          "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Telugu_Desam_Party_Flag.png/270px-Telugu_Desam_Party_Flag.png"
         },
          
         { "name": "Yuvajana Sramika Rythu Congress Party",
         "symbol": "Ceiling Fan",
          "address": "H.No.8-2-269/S/98, Sagar Society, Road No. 2, Banjara Hills, Hyderabad- 34, Andhra Pradesh-500034",
          "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Indian_Election_Symbol_Ceiling_Fan.svg/300px-Indian_Election_Symbol_Ceiling_Fan.svg.png",
          "leader":"https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Ysr_cp_flag.jpg/270px-Ysr_cp_flag.jpg"

        },
      ]
      
    },
    {        
        "id": "2",
        "name": "Arunachal Prades",
        "cities": [
          
          { "name": "People’s Party of Arunachal",
           "symbol": "Maize",
            "address": "K. Ringu Complex,G-Extension Road, Naharlagun-791110 (Arunachal Pradesh)",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Indian_Election_Symbol_Maize.svg/225px-Indian_Election_Symbol_Maize.svg.png",
            "leader":""
          },
          { "name": "Janata Dal (Secular)",
           "symbol": "A Lady Farmer carrying Paddy on her head",
            "address": "5, Safdarjung Lane, New Delhi – 110003",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Janata_Dal_%28United%29_Flag.svg/75px-Janata_Dal_%28United%29_Flag.svg.png",
            "leader":""
           },
            
           { "name": " Janata Dal (United)",
           "symbol": "Arrow",
            "address": "7, Jantar Mantar Road, New Delhi-110001",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Indian_Election_Symbol_Arrow.svg/75px-Indian_Election_Symbol_Arrow.svg.png",
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Janata_Dal_%28United%29_Flag.svg/75px-Janata_Dal_%28United%29_Flag.svg.png",
            
          },
        ]
        
      },
      {        
        "id": "3",
        "name": "Assam",
        "cities": [
          
          { "name": "All India United Democratic Front",
           "symbol": "Lock & Key",
            "address": "No.3 Friends Path, Hatigaon, Guwahati-781038 (Assam)",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Indian_Election_Symbol_Lock_And_Key.svg/75px-Indian_Election_Symbol_Lock_And_Key.svg.png"
            ,
            "leader":"",
            
          },
          { "name": "Asom Gana Parishad",
           "symbol": "Elephant",
            "address": "Gopinath Bordoloi Road,Guwahati- 781001 (Assam)",
            "url":""
            ,
            "leader":""
           },
            
           { "name": " Bodoland Peoples Front",
           "symbol": "Nangol",
            "address": "Head Office Kokrajhar, B.T.C., P.O.-Kokrajhar, Distt.Kokrajhar, Assam, Pin-783370",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Indian_Election_Symbol_Elephant.png/75px-Indian_Election_Symbol_Elephant.png"
            ,
            "leader":""
          },
          { "name": "United People’s Party, Liberal",
           "symbol": "Tractor Chalata Kisan",
            "address": "J.D.Road, Ward No.4, P.O.-Kokrajhar, District – Kokrajhar,BTAD, Assam - 783370",
            "url":"https://myneta.info/party/lib/img/party/1956.png"
            ,
            "leader":""
          },
        ]
        
      },
      {        
        "id": "4",
        "name": "Bihar",
        "cities": [
          
          { "name": "Janata Dal (United)",
           "symbol": "Arrow",
            "address": "7, Jantar Mantar Road, New Delhi-110001",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Indian_Election_Symbol_Arrow.svg/75px-Indian_Election_Symbol_Arrow.svg.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Janata_Dal_%28United%29_Flag.svg/75px-Janata_Dal_%28United%29_Flag.svg.png"
          },
          { "name": "Lok Jan Shakti Party",
           "symbol": "Bungalow",
            "address": "12, Janpath, New Delhi – 110 011",
            "url":""
            ,
            "leader":""
           },
            
           { "name": "Rashtriya Janata Dal ",
           "symbol": "Hurricane Lamp",
            "address": "13, V.P. House, Rafi Marg, New Delhi -110001",
            "url":"https://upload.wikimedia.org/wikipedia/commons/2/20/Indian_Election_Symbol_Bungalow.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Lok_Janshakti_Party_Flag.svg/300px-Lok_Janshakti_Party_Flag.svg.png"
          },
          { "name": "Rashtriya Lok Samta Party",
          "symbol": "Ceiling Fan ",
           "address": "Mouza – Dhkkanpura, Mohalla – Mohanpur Punaichak (Near Hartali Morh), Boring Kainal Road, Patna, Bihar-800001",
           "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Indian_Election_Symbol_Ceiling_Fan.svg/300px-Indian_Election_Symbol_Ceiling_Fan.svg.png"
           ,
            "leader":"https://upload.wikimedia.org/wikipedia/en/5/50/Flag_of_the_RLSP.png"
         },
        ]
        
      },
      {        
        "id": "5",
        "name": "Chhattisgarh",
        "cities": [
          
          { "name": "Janta Congress Chhattisgarh (J)",
           "symbol": "Farmer Ploughing (within Square)",
            "address": "Shri Balaji Complex, Near Gandhi Maidan, Khamtarai, Raipur, Chhattisgarh- 492001",
            "url":"https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Indian_Election_Symbol_Farmer_Ploughing_%28within_Square%29.jpg/75px-Indian_Election_Symbol_Farmer_Ploughing_%28within_Square%29.jpg"
            ,
            "leader":""
          },
          
        ]
        
      },
      {        
        "id": "6",
        "name": " Goa",
        "cities": [
          
          { "name": "Maharashtrawadi Gomantak",
           "symbol": "Lion",
            "address": "Flat No.102, Block-1, Dukle Heaven, ST-Inez, Panaji – 403001 ",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Indian_Election_Symbol_Lion.svg/75px-Indian_Election_Symbol_Lion.svg.png"
            ,
            "leader":""
          },
          { "name": " Goa Forward Party ",
           "symbol": "Coconut",
            "address": "Sheesh Mahal, 2nd Floor, Office4, Comba, Margao, Goa -403601",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Indian_election_symbol_Coconut.svg/75px-Indian_election_symbol_Coconut.svg.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Goa_Forward_Party_Flag.jpg/75px-Goa_Forward_Party_Flag.jpg"
          },
        ]
        
      },
      {        
        "id": "7",
        "name": "Haryana",
        "cities": [
          
          { "name": "Jannayak Janta Party ",
           "symbol": "Key",
            "address": "S.C.O. 20, Second Floor, District Commercial Centre, Huda Market, Sector- 56 , Gurugram, Haryana- 122001",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Indian_election_symbol_Key.svg/75px-Indian_election_symbol_Key.svg.png"
            ,
            "leader":""
          },
          { "name": " Indian National Lok Dal ",
           "symbol": "Spectacles",
            "address": "No.80, Sector – 9, Chandigarh – 160009",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/INLD1.svg/75px-INLD1.svg.png"
            ,
            "leader":"https://en.wikipedia.org/wiki/File:Indian_National_Lok_Dal_Flag.svg"
          },
        ]
        
      },
      {        
        "id": "8",
        "name": "Jammu & Kashmir",
        "cities": [
          
          { "name": "Jammu & Kashmir National Conference",
           "symbol": "Plough",
            "address": "(i) Sher-e-Kashmir Bhavan, Residency Road, Jammu (J&K)-180001 (ii) Nawai Subh Complex Zero Bridge, Srinagar (J&K)-190001",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Indian_Election_Symbol_Plough.png/75px-Indian_Election_Symbol_Plough.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Jammu_and_Kashmir_%281936-1953%29.svg/75px-Flag_of_Jammu_and_Kashmir_%281936-1953%29.svg.png"
          },
          { "name": " Jammu & Kashmir National Panthers Party ",
           "symbol": "Bicycle",
            "address": "17, V.P. House, Rafi Marg, New Delhi-110001",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Indian_Election_Symbol_Cycle.png/75px-Indian_Election_Symbol_Cycle.png"
            ,
            "leader":""
          },
          { "name": "Jammu and Kashmir Peoples Democratic Party",
           "symbol": "Ink Pot & Pen",
            "address": "2-Emporium Lane, Residency Road, Srinagar-190001",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Indian_Election_Symbol_Ink_Pot_and_Pen.png/75px-Indian_Election_Symbol_Ink_Pot_and_Pen.png"
            ,
            "leader":""
          },
        ]
        
      },
      {        
        "id": "9",
        "name": "Jharkhand",
        "cities": [
          
          { "name": "AJSU Party ",
           "symbol": "Banana",
            "address": "H-59, Harmu Housing Colony, PS-Argora, PO-Harmu, Ranchi, Jharkhand – 834002",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Indian_Election_Symbol_Banana.svg/150px-Indian_Election_Symbol_Banana.svg.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/ANSU_Party_flag.jpg/270px-ANSU_Party_flag.jpg"
          },
          { "name": "Jharkhand Mukti Morcha",
           "symbol": "Bow & Arrow",
            "address": "Bariatu Road, Ranchi-834008 (Jharkhand)",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Indian_Election_Symbol_Bow_And_Arrow.svg/225px-Indian_Election_Symbol_Bow_And_Arrow.svg.png"
            ,
            "leader":""
          },
          { "name": "Rashtriya Janata Dal",
           "symbol": "Hurricane Lamp",
            "address": "13, V.P. House, Rafi Marg, New Delhi -110001",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Indian_Election_Symbol_Hurricane_Lamp.png/150px-Indian_Election_Symbol_Hurricane_Lamp.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/RJD_Flag.svg/300px-RJD_Flag.svg.png"
          },
        ]
        
      },
      {        
        "id": "10",
        "name": "Karnataka",
        "cities": [
          
          { "name": "Janata Dal (Secular)",
           "symbol": "A Lady Farmer carrying Paddy on her head",
            "address": "5, Safdarjung Lane, New Delhi – 110003",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indian_election_symbol_female_farmer.svg/75px-Indian_election_symbol_female_farmer.svg.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/JD%28S%29_Flag.png/75px-JD%28S%29_Flag.png"
          },
         
        ]
        
      },
      {        
        "id": "11",
        "name": "Kerala",
        "cities": [
          
          { "name": "Janata Dal (Secular)",
           "symbol": "A Lady Farmer carrying Paddy on her head",
            "address": "5, Safdarjung Lane, New Delhi – 110003",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indian_election_symbol_female_farmer.svg/75px-Indian_election_symbol_female_farmer.svg.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/JD%28S%29_Flag.png/75px-JD%28S%29_Flag.png"
          },
          { "name": "Kerala Congress (M)",
           "symbol": "Two Leaves","address": "State Committee Office, Near Fire Station, Kottayam (Kerala-686001) ",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Indian_election_symbol_two_leaves.svg/150px-Indian_election_symbol_two_leaves.svg.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Kerala-Congress-flag.svg/300px-Kerala-Congress-flag.svg.png"
          },
          { "name": "Indian Union Muslim League",
           "symbol": "Ladder",
            "address": "Quaid-e-Millath Manzil,36 Maraikayar Lebbai Street, Chennai-600001, Tamil Nadu",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Indian_Election_Symbol_Lader.svg/150px-Indian_Election_Symbol_Lader.svg.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_the_Indian_Union_Muslim_League.svg/270px-Flag_of_the_Indian_Union_Muslim_League.svg.png"
          },
          { "name": "Revolutionary Socialist Party",
           "symbol": "Spade & Stoker",
            "address": "37 Ripon Street, (Muzaffar Ahmed Sarani), Kolkata700016 (West Benga",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Indian_Election_Symbol_Spade_and_Stoker.png/120px-Indian_Election_Symbol_Spade_and_Stoker.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/RSP-flag.svg/270px-RSP-flag.svg.png"
          },
        ]
        
      },
      {        
        "id": "12",
        "name": "Maharashtra",
        "cities": [
          
          { "name": "Maharashtra Navnirman Sena",
          "symbol": "Railway Engine",
           "address": "Krishna Kunj, M.B.Raut Road, Shivaji Park, Mumbai-400028, Maharashtra.",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Mns-symbol-railway-engine.png/225px-Mns-symbol-railway-engine.png"
            ,
            "leader":"http://mumbaivotes.com/files/parties/logos/11.jpg"
          },
          { "name": "shiv Sena",
          "symbol": "Bow and Arrow",
          "address": "Shivsena Bhavan, Gadkari , Dadar, Mumbai400028 (Maharashtra).",
           "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Indian_Election_Symbol_Bow_And_Arrow.svg/225px-Indian_Election_Symbol_Bow_And_Arrow.svg.png"
           ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Shiv_Sena_flag.jpg/270px-Shiv_Sena_flag.jpg"
          },
         
        ]
        
      },
      {        
        "id": "13",
        "name": "Manipur",
        "cities": [
          
          { "name": "Naga Peoples Front",
          "symbol": "Cock",
           "address": "Post Box No.565, Kohima-797001, Nagaland.",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Indian_Election_Symbol_Cock.png/176px-Indian_Election_Symbol_Cock.png"
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_the_Naga_People%27s_Front.png/270px-Flag_of_the_Naga_People%27s_Front.png"
          },
          { "name": "People's Democratic Alliance ",
          "symbol": "Crown",
          "address": "Ragailong, Imphal-795 001, Manipur.",
           "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_pda.jpg/225px-Logo_pda.jpg"
           ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/d/db/PDA_Flag.png"
          },
         
        ]  
      },
      {        
        "id": "14",
        "name": "Meghalaya",
        "cities": [
          
          { "name": "United Democratic Party",
          "symbol": "Drum",
           "address": "Mawlai Nonglum, Shillong-793008(Meghalaya).",
            "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Indian_Election_Symbol_Drums.png/225px-Indian_Election_Symbol_Drums.png"
            ,
            "leader":""
          },
          { "name": "Hill State People's Democratic Party",
          "symbol": "Lion",
          "address": "Kench's Trace, Laban,Shillong 739004.(Meghalaya)",
           "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Indian_Election_Symbol_Lion.svg/225px-Indian_Election_Symbol_Lion.svg.png"
           ,
            "leader":""
          },
          { "name": "People's Democratic Front",
          "symbol": "Candles",
          "address": "H.No.-7/63, Lachuamiere, Shilong, Meghalaya-793001",
           "url":""
           ,
            "leader":""
          },
         
        ]  
      },
      {        
        "id": "15",
        "name": "Mizoram",
        "cities": [
          
          { "name": "Mizo National Front",
          "symbol": "Star",
           "address": "General Headquarters, Zarkawt, Aizawl (Mizoram)-796001.",
            "url":""
            ,
            "leader":"https://upload.wikimedia.org/wikipedia/commons/d/d4/PDF_party_flag.jpg"
          },
          { "name": "Mizoram People's Conference",
          "symbol": "Electric Bulb",
          "address": "General Headquarters, Treasury Square, Aizawl-796001 (Mizoram).",
           "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bulb_Election_Symbol.svg/150px-Bulb_Election_Symbol.svg.png"
           ,
            "leader":""
          },
          { "name": "Zoram Nationalist Party",
          "symbol": "Sun (without rays)",
          "address": "General Headquarters, Treasury Square, Aizawl-796001 (Mizoram)",
           "url":"https://www.fotw.info/images/i/in%7Dzoram.gif"
           ,
            "leader":""
          },
         
        ]  
      },
    // Add more states as needed
  ];
  
  import React, { useState } from 'react'

const RegistrationForm = () => {
    const [formData , setFormData] = useState({
        name:"",
        email:"",
        password:"",
        uniqueKey:"",
        age:0
    })
    console.log(formData);

    function changeHandler(event)
    {
        setFormData(function(prevFormData)
        {
          return{
            ...prevFormData,
             [event.target.name] :  event.target.value
          }
        })
    }
    function submitHandler(event)
    {
        event.preventDefault();
    
        console.log("finally printing the value of the form data");
        console.log(formData);
    }
    return (
    <form action="" onSubmit={submitHandler}>
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text"
                name='name'
                value={formData.name}
                id='name'
                onChange={changeHandler}
                className='outline'
                 />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"
                name='email'
                value={formData.email}
                id='email'
                onChange={changeHandler}
                className='outline'
                 />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password"
                name='password'
                value={formData.password}
                id='password'
                onChange={changeHandler}
                className='outline'
                 />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number"
                name='age'
                value={formData.age}
                id='age'
                onChange={changeHandler}
                className='outline'
                 />
            </div>
            <div>
                <label htmlFor="uniqueKey">Enter your best Friend Name</label>
                <input type="text"
                name='uniqueKey'
                value={formData.uniqueKey}
                id='uniqueKey'
                onChange={changeHandler}
                className='outline'
                 />
            </div>

        </div>
    </form>
  )
}

export default RegistrationForm
  
  
  
  
  
  
  
  
  
  
  
  
  
  */


/*

import React from 'react'

const Card = (props) => {
  return (
//       "memberid": "2654", 
// "name": "Abdullah, Dr. Farooq", 
// "party": "J&KNC", 
// "constituencies": "Srinagar", 
// "state": "Jammu and Kashmir"
    <div>
      <p>name : {props.data.name}</p>
      <p>party : {props.data.party}</p>
      <p> constituencies: {props.data.constituencies}</p>
      <p>state : {props.data.state}</p>
      
    </div>
  )
}

export default Card
*/
















/*

The purpose of this code is to group the vote objects by their state and member ID and calculate the count of each member ID state-wise. Let's go through the code step by step:

The reduce method is called on the voteData array. The reduce function is used to iterate over each vote object in voteData and accumulate the result into the memberIDCounts object.

The reduce method takes two arguments: a callback function and an initial value ({} in this case). The callback function takes two parameters: acc (the accumulator) and vote (the current vote object being processed).

Inside the callback function, the vote object is destructured to extract the state, member_ID, name, and party properties.

The code checks if the state property does not exist as a key in the acc object. If it doesn't exist, an empty array is assigned to acc[state]. This step ensures that each state has its own array in the acc object where the member details will be stored.

The code then uses the find method on acc[state] to search for an existing member with the same member_ID. If an existing member is found, it means that the member has already been added to the state array. In this case, the count property of the existing member is incremented by 1.

If no existing member is found, it means that the member has not been added to the state array yet. In this case, a new object representing the member with member_ID, name, party, and count: 1 properties is pushed into acc[state].

Finally, the acc object (which accumulates the grouped and counted data) is returned from the callback function.

Once the reduce method finishes iterating over all the vote objects, the resulting acc object contains the member details grouped by state and member ID, with the count of each member ID state-wise.

The resulting memberIDCounts object is assigned to the memberIDCounts constant, which can then be used to display the data in the table.

In summary, this code organizes the vote objects by state and member ID, keeping track of the count for each member ID in each state. It creates an object where each state key maps to an array of members with their corresponding details and count.

*/




