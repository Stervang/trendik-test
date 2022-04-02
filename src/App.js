import React from 'react';
import './App.css';
import MaterialTable from 'material-table';


function App() {
  const columns = [
    { title: "Nombre", field: "name" },
    { title: "Pais", field: "country" },
    { title: "Email", field: "email" },
    { title: "Tags", field: 'tags' },
  ]

  return (
    <div className="App">
      <h1 align="center">Influencers-App</h1>
      <h4 align='center'>Busca a tus influencers favoritos</h4>
      <MaterialTable
        title="Data Influenciadores "
        columns={columns}
        options={{ debounceInterval: 700, padding: "dense"}}
        data={query =>
          new Promise((resolve, reject) => {
            // prepare your data and then call resolve like this:
            let url = 'http://localhost:3000/Influencers?'
            //searching
            if (query.search) {
              url += `q=${query.search}`
            }
            //sorting 
            if (query.orderBy) {
              url += `&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
            }
            //filtering
            if (query.filters.length) {
              const filter = query.filters.map(filter => {
                return `&${filter.column.field}${filter.operator}${filter.value}`
              })
              url += filter.join('')
            }
            //pagination
            url += `&_page=${query.page + 1}`
            url += `&_limit=${query.pageSize}`

            fetch(url).then(resp => resp.json()).then(resp => {
              resolve({
                data: resp,// your data array
                page: query.page,// current page number
                totalCount: 499// total row number
              });
            })

          })
        }
      />
    </div>
  );
}

export default App;
