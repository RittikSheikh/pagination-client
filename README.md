# pagination-client side
## first use This State = '
+[products]
+ [count]
+ [currentPage]
+ [perPage]
'
+ then implement the page btn with [...Array(10).keys()].map(k=> <btn>{k+1}</btn>
+ - [x] 10 will replace with totalPage after calculating the Match.ceil(count / perpage)
+ implement the select option and send the data with onChange={(e)=> setPerPage(e.target.value)}
+ in </button> tag pas the currentPage data with <button 'onClick={()=>setCurrentPage(k)}>'
+ now totalPage = Math.ceil(count / perPage)
+ now send the data with query perameters in fetch API
+ >fetch(`http://localhost:10/products?currentPage=${currentPage}&perPage=${perPage}`)
+ get the data and set them into state 
+ > .then(data =>{setProducts(data.result); setCount(data.count)})
+ use the useEffect dependancy with useEffect(()=>{},[currentPage, perPage])

### That's all
