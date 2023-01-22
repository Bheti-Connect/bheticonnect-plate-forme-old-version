import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GrAppsRounded } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import SearchFilter from './../SearchFilter/SearchFilter';
import Cards from './Cards';
import CardsModal from './CardsModal';
import LoaderCards from './LoaderCards';
import { useTheme } from '../../context/themecontext';
import { axios_get, axios_post } from '../../utils/FunctionsComponent';
import LinksAPI from '../../utils/LinksAPI';

const AllCards = () => {
    // useState of pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0)
    const [initPage, setInitPage] = useState(-1)
    // query useState for search
    const [query, setQuery] = useState("")
    // select card useState
    const [select, setSelect] = useState(null)
    // cards data
    const [data, setData] = useState([])
    // Modal
    const [modal, setModal] = useState(false)
    // Loading : React content loader
    const [loading, setLoading] = useState(true)
    // Theme
    const theme = useTheme()
    // Trie : Recent and Ancien
    const [trie, setTrie] = useState("")
    // Position change pagination : Tous, Startup, pme
    const [paginationSelect, setPaginationSelect] = useState("tous")
    const [positionTrie, setPositionTrie] = useState("")



    // handle for receive data and set in useState
    const handleSetData = (response) => {
        setCurrentPage(response.meta.current_page);
        setTotalPage(response.meta.last_page);
        setItemsPerPage(response.meta.limit);
        setData(response.data);
    }
  
  
    // GET data from API
    const getData = () => {
      axios_get(LinksAPI.projets, handleSetData)
    }
  
  
    // Change Section of data : Tous, PME ou STARTUP
    const changeSectionMenu = (position) => {
      let Filter = ""

      switch (position) {
        case "pme":
          Filter = {filters: [{field: 'company_type', value: 'pme'}]}
          axios_post(LinksAPI.projetsSearch,Filter , handleSetData)
          setPaginationSelect("pme")
          break;
        case "startup":
          Filter = {filters: [{field: 'company_type', value: 'startup'}]}
          axios_post(LinksAPI.projetsSearch,Filter,handleSetData)
          setPaginationSelect("startup")
          break;
        default:
          getData()
          setPaginationSelect("tous")
          break;
      }
    }


      // handle menu : tous, startup and PME for CSS
    const handleMenu = (e) => {
        let activeBtn = document.querySelector(".menuSection .active");
        let valid = e.target.tagName.toLowerCase()
        if(!e.target.classList.contains("active") && valid == "li")
        {
          activeBtn.classList.remove("active")
          e.target.classList.add("active")
        }
    }

    // Search data from API
    const searchData = () => {
      // Get research
      if (query)
      {
        // Body POST
        let toSend = {
          search: {
            value: `${query}`
        }
        }
        axios_post(LinksAPI.projetsSearch, toSend, handleSetData)
        setPaginationSelect("query")
      }
    }

    // Get Trie data with id as field from API
    const handleTrieData = () => {
      let toSend = ""
      if (trie == "Recent")
      {
        toSend = {"sort":[ {"field": "id","direction": "desc"}]}
        axios_post(LinksAPI.projetsSearch, toSend, handleSetData)
        setPositionTrie("Recent")
        setPaginationSelect("trieData")
      }

      if (trie == "Ancien")
      {
        toSend = {"sort":[ {"field": "id","direction": "asc"}]}
        axios_post(LinksAPI.projetsSearch, toSend, handleSetData)
        setPositionTrie("Ancien")
        setPaginationSelect("trieData")
      }
    }


    // handle change page
    let changePage = ({selected}) => {
      var pageNumber = selected + 1
      let toSend = ""

      switch (paginationSelect) {
        case "pme":
          toSend = {filters: [{field: 'type', value: 'pme'}]}
          axios_post(LinksAPI.projetsSearchPage(pageNumber), toSend, handleSetData)
          break;
        case "query":
          toSend = {"search": {"value": `${query}`}}
          axios_post(LinksAPI.projetsSearchPage(pageNumber), toSend, handleSetData)
          break;
        case "startup":
          toSend = {filters: [{field: 'type', value: 'startup'}]}
          axios_post(LinksAPI.projetsSearchPage(pageNumber), toSend, handleSetData)
          break;
        case "trieData":
          if(positionTrie == "Recent")
          {
            toSend = {"sort":[ {"field": "id","direction": "desc"}]}
            axios_post(LinksAPI.projetsSearchPage(pageNumber), toSend, handleSetData)
          }
          if (positionTrie == "Ancien")
          {
            toSend = {"sort":[ {"field": "id","direction": "asc"}]}
            axios_post(LinksAPI.projetsSearchPage(pageNumber), toSend, handleSetData)
          }
          break;
        default:
          axios_get(LinksAPI.projetsPage(pageNumber), handleSetData)
          break;
      }
    }

    // display items
    let displayItems = data.map((item, index) => {
      return <Cards key={index} item={item} setModal={setModal} setSelect={setSelect} />
    })


    // First UseEffect
    useEffect(() => {
        let waiting = setTimeout(() => {
          setLoading(false)
        }, 4000);
        changeSectionMenu()
        return () => {
          clearTimeout(waiting)
        }
      }, [])
  
  
       // UseEffect if currentPage change
      useEffect(() => {
        setLoading(true)
        const waiting = setTimeout(() => {
          setLoading(false)
        }, 4000);
  
        setInitPage(currentPage - 1)
  
        return () => {
          clearTimeout(waiting)
        }
      }, [currentPage, query])
  
      // useEffect of query
      useEffect(() => {
        searchData()
      }, [query])
  
      // useEffect of trie
      useEffect(() => {
        handleTrieData()
      }, [trie])


  return (
    <InvestisseurStyled>

    <Header theme={theme}>
            <div className="containerMenu">
                <div className='Box'>

                    {/* Section menu */}
                    <ul className='menuSection' onClick={handleMenu}>
                        {/* Tous */}
                        <li className='active' onClick={() => changeSectionMenu("tous")}><GrAppsRounded/>Tous</li>
                        {/* Startup */}
                        <li onClick={() => changeSectionMenu("startup")}><GrAppsRounded/>Startup</li>
                        {/* PME */}
                        <li onClick={() => changeSectionMenu("pme")}><GrAppsRounded/>PME</li>
                    </ul>

                    {/* Filter and search */}
                    <SearchFilter setQuery={setQuery} setTrie={setTrie} />
                </div>
                <hr/>
            </div>
    </Header>

    <Projects theme={theme}>

            <All>

              {
                  loading ? (<LoaderCards count={15}/>) : (displayItems)
              }

            </All>

            {/* Pagination */}
            <ReactPaginate
            previousLabel={"Précédent"}
            nextLabel={"Suivant"}
            pageCount={totalPage}
            onPageChange={changePage}
            forcePage={initPage}
            breakLabel="..."
            pageRangeDisplayed={7}
            marginPagesDisplayed={1}
            containerClassName={"containerClassName"}
            pageClassName={"pageClassName"}
            previousLinkClassName={"previousLinkClassName"}
            nextLinkClassName={"nextLinkClassName"}
            disabledClassName={"disabledClassName"}
            activeClassName={"activeClassName"}
            />

    </Projects>

    {
        modal && <CardsModal select={select} setModal={setModal}/>
    }

    </InvestisseurStyled>
  )
}

// Style CSS with styled component


const InvestisseurStyled = styled.section`


/*background : no-repeat center/80% url("../../assets/icons/icon_bheti_design.png") ;*/


`;

const All = styled.div`
display: flex;
width: 89%;
justify-content: left;
margin:auto;
flex-wrap: wrap;
@media only screen and (max-width: 900px) {
  width: 86%;
}

@media only screen and (max-width: 415px) {
  width: 68%;
}

`;

const Projects = styled.div`

.containerClassName {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items:center;
  user-select: none;
  font-size: 13px;
}

.containerClassName li {
  margin: 50px 10px;
}

.pageClassName{
  background-color: ${props => props.theme.colorGrey5};
  border-radius: 50px;
  cursor: pointer;
  padding: 4px 7px;
  transition: .3s ease;


  &:hover{
    background-color: ${props => props.theme.colorBheti};
  }

  a{
    color:${props => props.theme.colorBheti};
  }
}

.previousLinkClassName{
  color: ${props => props.theme.colorBheti} ;
  padding: 5px;
  font-family: sans-serif;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  &:hover{
    opacity: 0.7;
  }
}

.nextLinkClassName{
  color: ${props => props.theme.colorBheti} !important;
  padding: 5px;
  font-family: sans-serif;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  &:hover{
    opacity: 0.7;
  }
}


.activeClassName{
  background-color: ${props => props.theme.colorBheti};
  color: red;
  border-radius: 50px;
}

.disabledClassName{

}





@media only screen and (max-width: 768px) {

  .containerClassName {
    font-size: 12px;
  }

  .previousLinkClassName{
    font-size: 15px;
  }

  .nextLinkClassName{
    font-size: 15px;
  }


}

@media only screen and (max-width: 578px) {

  .containerClassName {
    font-size: 10px;
  }

  .previousLinkClassName{
    font-size: 13px;
  }

  .nextLinkClassName{
    font-size: 13px;
  }

}


`;

const Header = styled.div`


margin: 55px;

.menuSection{
    display: flex;
    flex-direction:row;
    list-style: none;
    margin-bottom:-5px;

    svg{
        padding-top:4px;
        padding-right:3px;
    }
}

.menuSection li {
  margin-right: 20px;
  padding-bottom: 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  font-style: normal;

  &:hover{
    color: ${props => props.theme.colorBheti};
  }

}

.containerMenu{
    margin-top: 30px;


    hr {
    margin-top: -9px;
    border: 0.5px solid rgb(0 0 0 / 11%);
    }
}

.containerMenu .Box{
    display: flex;
    justify-content: space-between;
    align-items:center;
}

.active {
    border-bottom: 2px solid ${props => props.theme.colorBheti};
}

@media only screen and (max-width: 768px) {
  h3{
    font-size: 20px;
  }

  p {
  font-size: 10px;
  }

  .menuSection li {
  padding-bottom: 10px;
  font-size: 15px;
  }

}

@media only screen and (max-width: 578px) {

  margin: 40px;

  .containerMenu .Box{
    flex-direction: column;
}

}

`;


export default AllCards