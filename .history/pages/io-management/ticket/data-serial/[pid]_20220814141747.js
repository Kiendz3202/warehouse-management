import React, { useEffect, useState } from 'react'
import Loading from '../../../../components/UI/Loading'
import Link from 'next/link'
import { useRouter } from 'next/router'



function GetDatasSerialPage() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [auth, setAuth] = useState()


    const router = useRouter()
    const { pid } = router.query

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/login')
            return;
        }
        const token = localStorage.getItem('token')
        setAuth(token)
    }, [])

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        const fetchData = async () => {
            let token = localStorage.getItem('token')
            setLoading(true)
            try {
                const res = await fetch(`https://scm-tool.thanhpp.ninja/import_ticket/${pid}/serial`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        'Content-type': 'application/json'
                    }
                })

                if (!res.ok) {
                    throw new Error('can not fetch data')
                    return;
                }

                const data = await res.json()

                const dataFake = {
                    error: {
                        code: 200,
                        message: "OK"
                    },
                    data: {
                        sku1: [
                            "001001002061010",
                            "001001002061004",
                            "001001002061002",
                            "001001002061005",
                            "001001002061006",
                            "001001002061000",
                            "001001002061003",
                            "001001002061008",
                            "001001002061026",
                            "001001002061037",
                            "001001002061049",
                            "001001002061061",
                            "001001002061067",
                            "001001002061080",
                            "001001002061019",
                            "001001002061028",
                            "001001002061041",
                            "001001002061053",
                            "001001002061066",
                            "001001002061081",
                            "001001002061050",
                            "001001002061021",
                            "001001002061064",
                            "001001002061076",
                            "001001002061086",
                            "001001002061025",
                            "001001002061039",
                            "001001002061054",
                            "001001002061062",
                            "001001002061075",
                            "001001002061018",
                            "001001002061036",
                            "001001002061071",
                            "001001002061088",
                            "001001002061022",
                            "001001002061040",
                            "001001002061057",
                            "001001002061079",
                            "001001002061035",
                            "001001002061055",
                            "001001002061074",
                            "001001002061017",
                            "001001002061034",
                            "001001002061082",
                            "001001002061059",
                            "001001002061029",
                            "001001002061048",
                            "001001002061073",
                            "001001002061024",
                            "001001002061078",
                            "001001002061033",
                            "001001002061065",
                            "001001002061090",
                            "001001002061020",
                            "001001002061047",
                            "001001002061085",
                            "001001002061014",
                            "001001002061046",
                            "001001002061084",
                            "001001002061058",
                            "001001002061016",
                            "001001002061038",
                            "001001002061070",
                            "001001002061044",
                            "001001002061089",
                            "001001002061060",
                            "001001002061068",
                            "001001002061072",
                            "001001002061012",
                            "001001002061087",
                            "001001002061013",
                            "001001002061023",
                            "001001002061030",
                            "001001002061027",
                            "001001002061031",
                            "001001002061032",
                            "001001002061045",
                            "001001002061042",
                            "001001002061043",
                            "001001002061056",
                            "001001002061051",
                            "001001002061063",
                            "001001002061069",
                            "001001002061077",
                            "001001002061083",
                            "001001002061009",
                            "001001002061001",
                            "001001002061015",
                            "001001002061092",
                            "001001002061093",
                            "001001002061097",
                            "001001002061011",
                            "001001002061095",
                            "001001002061096",
                            "001001002061099",
                            "001001002061052",
                            "001001002061094",
                            "001001002061007",
                            "001001002061091",
                            "001001002061098"
                        ],
                        sku2: [
                            "001001002061010",
                            "001001002061004",
                            "001001002061002",
                            "001001002061005",
                            "001001002061006",
                            "001001002061000",
                            "001001002061003",
                            "001001002061008",
                            "001001002061026",
                            "001001002061037",
                            "001001002061049",
                            "001001002061061",
                            "001001002061067",
                            "001001002061080",
                            "001001002061019",
                            "001001002061028",
                            "001001002061041",
                            "001001002061053",
                            "001001002061066",
                            "001001002061081",
                            "001001002061050",
                            "001001002061021",
                            "001001002061064",
                            "001001002061076",
                            "001001002061086",
                            "001001002061025",
                            "001001002061039",
                            "001001002061054",
                            "001001002061062",
                            "001001002061075",
                            "001001002061018",
                            "001001002061036",
                            "001001002061071",
                            "001001002061088",
                            "001001002061022",
                            "001001002061040",
                            "001001002061057",
                            "001001002061079",
                            "001001002061035",
                            "001001002061055",
                            "001001002061074",
                            "001001002061017",
                            "001001002061034",
                            "001001002061082",
                            "001001002061059",
                            "001001002061029",
                            "001001002061048",
                            "001001002061073",
                            "001001002061024",
                            "001001002061078",
                            "001001002061033",
                            "001001002061065",
                            "001001002061090",
                            "001001002061020",
                            "001001002061047",
                            "001001002061085",
                            "001001002061014",
                            "001001002061046",
                            "001001002061084",
                            "001001002061058",
                            "001001002061016",
                            "001001002061038",
                            "001001002061070",
                            "001001002061044",
                            "001001002061089",
                            "001001002061060",
                            "001001002061068",
                            "001001002061072",
                            "001001002061012",
                            "001001002061087",
                            "001001002061013",
                            "001001002061023",
                            "001001002061030",
                            "001001002061027",
                            "001001002061031",
                            "001001002061032",
                            "001001002061045",
                            "001001002061042",
                            "001001002061043",
                            "001001002061056",
                            "001001002061051",
                            "001001002061063",
                            "001001002061069",
                            "001001002061077",
                            "001001002061083",
                            "001001002061009",
                            "001001002061001",
                            "001001002061015",
                            "001001002061092",
                            "001001002061093",
                            "001001002061097",
                            "001001002061011",
                            "001001002061095",
                            "001001002061096",
                            "001001002061099",
                            "001001002061052",
                            "001001002061094",
                            "001001002061007",
                            "001001002061091",
                            "001001002061098"
                        ]
                    }
                }

                setData(dataFake.data)
                console.log(data.data)

                setLoading(false)
            } catch (err) {
                alert(err)
                setLoading(false)
            }
        }

        fetchData()

    }, [router.isReady])

    return (
        <div>
            {data && auth && <table className=' w-full border-collapse border border-black'>
                <tbody>
                    <tr>
                        <th className='border border-black' rowSpan={data.sku1 && data.sku1.length + 1}>{'sku1'}</th>
                        {/* <td className='border border-black'>{'token id: '}</td> */}
                    </tr>
                    {data.sku1 && data?.sku1.map((item) => (
                        <tr key={item}>
                            <td className='border border-black'>{item}</td>
                        </tr>
                    ))}
                    {/* <tr>
                        <th className='border border-black'>Seri</th>
                        <td className='border border-black'>{'seri: ' + data.seri}</td>
                    </tr>
                    <tr>
                        <th className='border border-black' rowSpan='2'>Storage</th>
                        <td className='border border-black'>{'name: ' + data.storage.name}</td>
                    </tr>
                    <tr>
                        <td className='border border-black'>{'location: ' + data.storage.location}</td>
                    </tr>
                    <tr>
                        <th className='border border-black'>Supplier</th>
                        <td className='border border-black'>{'name: ' + data.supplier.name}</td>
                    </tr> */}
                </tbody>
            </table>}
        </div>
    )
}

export default GetDatasSerialPage


