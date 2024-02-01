import { Button, Pagination, TableBody, TableCell, TableRow, Table, TableHead, TableHeadCell, Spinner } from "flowbite-react";
import rootdomain from "../Utils";
import { useEffect, useState } from "react";



function BadgeComponent({ carid }) {
    // 组合URL
    const baseUrl = 'https://img.closeai.biz/endpoint?url=';
    const endpointUrl = `${rootdomain()}/endpoint?carid=${encodeURIComponent(carid)}`;
    const imageUrl = `${baseUrl}${encodeURIComponent(endpointUrl)}`;
  
    return (
      <div>
        <img src={imageUrl} alt="Badge" />
      </div>
    );
  }

export function Carbody(){
    const [cars,setCars] = useState({list : [], pagination:{total: 0}});
    const [page,setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const onPageChange = (page) => {setPage(page);}
    
    useEffect(()=> {
        let bdy = {page:page};
        setIsLoading(true);
        fetch("/carpage",{
            method : "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body : JSON.stringify(bdy)
        }).then(response => response.json()).then(data=>{setCars(data.data);}).finally(()=> setIsLoading(false));
        
    },[page]);

    //useEffect(()=> console.log(cars), console.log(cars.pagination.total % 10 + 1),[cars])

    return (
        <>
        <div className="relative w-full">
            {isLoading && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-white bg-opacity-50">
          <Spinner aria-label="Loading..." />
        </div>
            )}
            <Table>
                <TableHead>
                    <TableHeadCell>序号</TableHeadCell>
                    <TableHeadCell>车队名称</TableHeadCell>
                    <TableHeadCell>车队状态</TableHeadCell>
                    <TableHeadCell>操作</TableHeadCell>
                </TableHead>
                <TableBody>
            {cars.list.map((item,index) => (
                <TableRow key={item.carID}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{item.carID}</TableCell>
                    <TableCell>
                        <BadgeComponent carid={item.carID}/>
                    </TableCell>
                    <TableCell><Button href={rootdomain() + '/auth/login?carid='+item.carID}>进入</Button></TableCell>
                </TableRow>
            ))}
            </TableBody>
            </Table>
            </div>
            <div className="flex overflow-x-auto sm:justify-center">
                <Pagination totalPages={(Math.ceil(cars.pagination.total / 10))} currentPage={page} onPageChange={onPageChange} showIcons></Pagination>
            </div>

        </>
    )
}