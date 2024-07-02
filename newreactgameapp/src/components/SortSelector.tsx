import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react"
import { BiSolidChevronDown } from "react-icons/bi"

interface Props {
    onSelectedOrder: (sortOrder: string) => void
}

const SortSelector = ({onSelectedOrder}:Props) => {

    const sortOrders = [

        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: 'released', label: 'Released Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'},
    ]
    
    const [selectedSort, setSelectedSort] = useState('')

    const handleSelectedSort = (value:string,label:string) => {
        setSelectedSort(label);
        onSelectedOrder(value);
    }

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BiSolidChevronDown/>}>Ordered by {selectedSort || 'Relevance'}</MenuButton>
            <MenuList>
                {/* <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem> */}
                {sortOrders.map(order => <MenuItem onClick={()=> handleSelectedSort(order.value, order.label)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    </>
  )
}

export default SortSelector