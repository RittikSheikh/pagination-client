# pagination-client side
## first use This State 
```
[products]
[count]
[currentPage]
[perPage]
```
+ then implement the page btn like this 
+ > [...Array(10).keys()].map(k=> <button 'onClick={()=>setCurrentPage(k)}'>{k+1}</button>)
+ - [x] 10 will replace with totalPage after calculating the Match.ceil(count / perpage)
+ implement the select option and send the data with onChange={(e)=> setPerPage(e.target.value)}
+ in btn tag pass the currentPage data with <button 'onClick={()=>setCurrentPage(k)}>'
+ now totalPage = Math.ceil(count / perPage)
+ now send the data with query perameters in fetch API
+ > fetch(`http://localhost:10/products?currentPage=${currentPage}&perPage=${perPage}`)
+ get the data and set them into state 
+ > .then(data =>{setProducts(data.result); setCount(data.count)})
+ use the useEffect dependancy with useEffect(()=>{},[currentPage, perPage])
+ replace the 10 with totalPage. [...Array(totalPage).keys()]
> conditional rendaring <button classname={`btn btn-primary ${ k === currentPage ? 'btn-warning' : undefined} `} >
### That's all
