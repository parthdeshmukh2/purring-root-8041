import React from 'react'
import { Box,Text,Image, List } from '@chakra-ui/react' 
import { useSelector } from 'react-redux'
import {ArrowBackIcon, StarIcon} from "@chakra-ui/icons"
import {Link as RouterLink} from "react-router-dom"
import {FcEmptyBattery} from "react-icons/fa"
import { FaRegBuilding } from "react-icons/fa"

export const CheckoutPage = () => {
  const filterData=useSelector((state)=>state.AppReducer.filterData)
  console.log(filterData)
  // /CarType: "SUV"
  // Damage_Protection_Package: 1500
  // DeliveryType: "Home Delivery"
  // Distance_Traveled: "unlimiited kms without fuel"
  // Driven: "36,613 kms driven"
  // Name: "Figo Aspire MT Petrol"
  // Price: 1696
  // Seat: 5
  // Star: "4"
  // Transmision: "Manual"
  // Type: "Petrol"
  // id: 1
  // image: "https://zoomcar-assets.zoomcar.com/photographs/original/dfcced83a3fca58d27ffea0b465b25831edf894e.JPG?1636629514"
  // [[Prototype]]: Object
  //  '/ 

  return (
    <Box width={"100%"} height={"550px"} border={"1px solid black"}>
     
      {/* first box */}
      <Box width={"100%"} height={"50px"} bg={"#f5f5f5"} textAlign={"left"}>
        <RouterLink to="/filterpage" >
        <ArrowBackIcon w={30} h={45}></ArrowBackIcon>
        </RouterLink>
      
      </Box>
      {/* second box */}
      <Box width={"100%"} marginTop={"0%"} height={"90px"} display={"flex"} border={"1px solid transparent"} marginTop={"-1"}>
        <Box width={"25%"} height={"100%"} >
    
        </Box>
        <Box padding={"2%"} textAlign={"left"}bg={"#f5f5f5"} width={"40%"} height={"100%"} border={"none"} marginTop={"0%"}>
          <Text fontSize={"18px"} fontWeight={"600"} >{filterData.Name}</Text>
          <Text fontSize={"10px"}>{filterData.Transmision} .  {filterData.Type}</Text>
        </Box>
        <Box width={"20%"} height={"95%"} border={"1px solid transparent"} marginLeft={"0.8%"} marginTop={"0.5%"}>
          <Image src={filterData.image} width={"100%"} height={"100%"}></Image>
           
        </Box>
          
          {/* total div */}
          </Box>
          <Box textAlign={"left"} padding={"1%"} marginLeft={"25%"} width={"50%"} height={"300px"} border={"1px solid none"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
           >
          
            <Box width={"100%"} marginBottom={"3%"}>
              <Text fontSize={"18px"}>Fri,22 Jul,12:00 PM</Text>
            <Text fontSize={"12px"}>New Delhi Railway Station</Text>
            </Box>
            
          
            <Text fontSize={"18px"}>Fri,22 Jul,8:00  PM</Text>
            <Text fontSize={"12px"}>New Delhi Railway Station</Text>
            <Box display={"flex"}>
            <Image src={"https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852"} 
            alt="sf" width={"5%"} height={"20px"} marginTop={"5%"}/>
         <Text fontSize={"16px"} marginLeft={"2%"} marginTop={"4.5%"}>Unlimited Kms without Fuel</Text> 
            </Box>
            <Box display={"flex"} width={"100%"} marginTop={"2%"}>
             <StarIcon w={"6"} h={"8"} color={"gold"}></StarIcon>
              <Text fontSize={"14px"} marginLeft={"2%"} marginTop={"2%"}>3.7 (6) . {filterData.Driven}</Text>
            </Box>
            <Box  
            fontSize={["10px","12px"]} padding={"12px 40px 12px 16px"} marginTop={"16px"} color={"#5160C2"} bg={"#f0f4ff"}
             borderRadius={"4px"} marginTop={"4%"} width={"100%"}
              height={[20,50,50]} border={"none"}>
              you will get a clean and sanitized car.Exact car location will be shared post-booking
            </Box>
            <Box marginTop={"4%"} width={"100%"} border={"1px solid crimson"} >
              <Text fontWeight={"600"}>Damage Protection Package</Text>
            </Box>
          
      </Box>
    </Box>
  )
}
