import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useSearchParams} from 'react-router-dom'


const FilterProduct = () => {

  const[searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.getAll("category");
  const initialSort = searchParams.getAll("sorting")
  const initialRating = searchParams.getAll("rating")
  const initialOrder = searchParams.getAll("order");

  const [category, setCategory] = useState(initialCategory || []);
  const [sort, setSort] = useState(initialSort || []);
  const [rating, setRating] = useState(initialRating || [])
  const[order, setOrder] = useState(initialOrder || [])
  
  // console.log(sorting)


  const handleFilter=(e)=>{
     let newCategory = [...category]

     if(newCategory.includes(e.target.value)){

      newCategory.splice(newCategory.indexOf(e.target.value),1)
     }else{
      newCategory.push(e.target.value)
     }
     setCategory(newCategory)
  }
  // console.log(category)
  // const handleSort=(e)=>{
  //      setSorting(e.target.value)
  // }
  // console.log(sorting)

    const handleSortAsc=(e)=>{
      // console.log(e.target.value)
       let targetSort = e.target.value.split(" ")[0];
       let targetOrder = e.target.value.split(" ")[1];

       let newSort = [...sort];
       let newOrder = [...order];

       if(newOrder.includes(targetOrder)){
        newOrder.splice(newOrder.indexOf(targetOrder), 1)
       }else{
        newOrder.push(targetOrder)
       }
        
       if(newSort.includes(targetSort)){
        newSort.splice(newSort.indexOf(targetSort), 1)
       }else{
        newSort.push(targetSort)
       }
       setSort(newSort)
       setOrder(newOrder)
    };


    const handleSortDesc=(e)=>{
      // console.log(e.target.value)
       let targetSort = e.target.value.split(" ")[0];
       let targetOrder = e.target.value.split(" ")[1];

       let newSort = [...sort];
       let newOrder = [...order];

       if(newOrder.includes(targetOrder)){
        newOrder.splice(newOrder.indexOf(targetOrder), 1)
       }else{
        newOrder.push(targetOrder)
       }
        
       if(newSort.includes(targetSort)){
        newSort.splice(newSort.indexOf(targetSort), 1)
       }else{
        newSort.push(targetSort)
       }
       setSort(newSort)
       setOrder(newOrder)
    };


    useEffect(() =>{
      const params = {}
      params.rating = rating
      params.sort = sort
      params.order = order
      params.category = category
     
      setSearchParams(params)
    },[category, setSearchParams,sort,rating,order]);


  return (
    <div>
      <div className='mainn__filteer'>
        
        <div className='filter_p'>
          <p className='p__div'>Filter Products</p>
        </div>
        <div className='category_p'>
          <p className='p__div'>Categories</p>
        </div>

      <div className='product__checkbox'>

        <div className='check__boxes'>
          <input
          onChange={handleFilter}
          checked={category.includes("Biscuits")}
           type='checkbox'
           value='Biscuits'
           />
           <label>Biscuits</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Dairy")}
           type='checkbox'
           value='Dairy'
           />
           <label>Dairy</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Dal")}
           type='checkbox'
           value='Dal'
           />
           <label>Dal</label>
        </div>
        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Fruits")}
           type='checkbox'
           value='Fruits'
           />
           <label>Fruits</label>
        </div>
        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Ketchup")}
           type='checkbox'
           value='Ketchup'
           />
           <label>Ketchup</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Oil")}
           type='checkbox'
           value='Oil'
           />
           <label>Oil</label>
        </div>
        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Rice")}
           type='checkbox'
           value='Rice'
           />
           <label>Rice</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Salt")}
           type='checkbox'
           value='Salt'
           />
           <label>Salt</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Soap")}
           type='checkbox'
           value='Soap'
           />
           <label>Soap</label>
        </div>

        <div className='check__boxes'>
          <input onChange={handleFilter}
          checked={category.includes("Vegetables")}
           type='checkbox'
           value='Vegetables'
           />
           <label>Vegetables</label>
        </div>
      </div>
      </div> 
      
      <div className='mainn__sort'>
        <div className='filter_p'>
          <p className='sort__p'>Sort Products</p>
        </div>

        <div className='category_p'>
          <p className='s__sort'>Sort By Price</p>
        </div>

        <div className='product__checkbox'>
           <div className='check__boxes'>
                <input onChange={handleSortAsc}
                type='checkbox'
                value='price asc'
                // name='sortBy'
                checked={sort.includes("price") && order.includes("asc")}
                 />
                 <label>Low to High</label>
           </div>
           <div>
           <input onChange={handleSortDesc}
                type='checkbox'
                value='price desc'
                // name='sortBy'
                checked={sort.includes("price") && order.includes("desc")}
                 />
                 <label>High to Low</label>
           </div>
        </div>


        <div className='category_p'>
          <p className='s__sort'>Sort By Rating</p>
        </div>

        <div className='product__checkbox'>
           <div className='check__boxes'>
                <input onChange={handleSortAsc}
                type='checkbox'
                value='rating asc'
                // name='sortBy'
                checked={sort.includes("rating") && order.includes("asc")}
                 />
                 <label>Low to High</label>
           </div>
           <div>
           <input onChange={handleSortDesc}
                type='checkbox'
                value='rating desc'
                // name='sortBy'
                checked={sort.includes("rating") && order.includes("desc")}
                 />
                 <label>High to Low</label>
           </div>
        </div>
      </div> 
    </div>
  )
}

export default FilterProduct