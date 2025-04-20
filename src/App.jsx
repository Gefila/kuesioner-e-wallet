import { useEffect, useState } from "react";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";

function App() {
    const [responses, setResponses] = useState([]);
    const [hierarchyData, setHierarchyData] = useState({
        criteria: [
            {
                id: 1,
                name: "Keamanan",
                subCriteria: [
                    { id: 1, name: "Proteksi Data Pengguna" },
                    { id: 2, name: "Keamanan Transaksi" },
                    { id: 4, name: "Keamanan Saldo" },
                ],
            },
            {
                id: 2,
                name: "Biaya",
                subCriteria: [
                    { id: 5, name: "Biaya Top Up" },
                    { id: 6, name: "Biaya Transfer" },
                ],
            },
            {
                id: 3,
                name: "Kemudahan Penggunaan",
                subCriteria: [
                    { id: 7, name: "UI & UX" },
                    { id: 8, name: "Kemudahan Registrasi dan Verifikasi" },
                    { id: 9, name: "Kecepatan Proses Transaksi" },
                ],
            },
            {
                id: 4,
                name: "Fitur",
                subCriteria: [
                    { id: 10, name: "QR & Scan To pay" },
                    { id: 11, name: "Promo & Cashback" },
                    { id: 12, name: "Kerjasama Dengan Merchant & E-Commerce" },
                    { id: 13, name: "Kelengkapan Fitur" },
                ],
            },
            {
                id: 5,
                name: "Customer Service",
                subCriteria: [
                    { id: 14, name: "Responsivitas Layanan" },
                    { id: 15, name: "Kualitas Penangan Masalah" },
                ],
            },
        ],
        alternatives: [
            { id: 1, name: "Dana" },
            { id: 2, name: "Ovo" },
            { id: 3, name: "Gopay" },
            { id: 4, name: "ShopeePay" },
        ],
    });

    function generatePairs(criteria) {
        const pairs = [];
        for (let i = 0; i < criteria.length; i++) {
            for (let j = i + 1; j < criteria.length; j++) {
                pairs.push([criteria[i], criteria[j]]);
            }
        }
        return pairs;
    }

    const perbandinganKriteria = generatePairs(hierarchyData.criteria);
    const perbandinganSubKriteria = hierarchyData.criteria.map((criterion) =>
        generatePairs(criterion.subCriteria)
    );
    const perbandinganAlternatif = generatePairs(hierarchyData.alternatives);
    const allSubCriteria = hierarchyData.criteria.flatMap((criterion) =>
        criterion.subCriteria.map((subCriterion) => ({
            ...subCriterion,
        }))
    );

    function handleRadioChange(event) {
        const { name, value } = event.target;
        setResponses((prevResponses) => ({
            ...prevResponses,
            [name]: value,
        }));
    }

    function handleSelectChange(event) {
        const { name, value } = event.target;
        setResponses((prevResponses) => ({
            ...prevResponses,
            [name]: value,
        }));
    }

    return (
        <div className="container mx-auto p-4 ">
            <h1 className="text-3xl font-bold mb-4">
                KUISIONER PEMILIHAN E-WALLET TERBAIK UNTUK TRANSAKSI DIGITAL
                BAGI MAHASISWA
            </h1>
            <Level1 hierarchyData={hierarchyData} generatePairs={generatePairs}/>
            {/* <Level2
                hierarchyData={hierarchyData}
                perbandinganSubKriteria={perbandinganSubKriteria}
            /> */}
            {/* <Level3
                allSubCriteria={allSubCriteria}
                hierarchyData={hierarchyData}
                perbandinganAlternatif={perbandinganAlternatif}
            /> */}
            {/* {perbandinganSubKriteria.map((subPairs, index) => (
                <div key={index}>
                    <h2>{hierarchyData.criteria[index].name}</h2>
                    {subPairs.map((pair, subIndex) => (
                        <p key={subIndex}>
                            {pair[0].name} vs {pair[1].name}
                        </p>
                    ))}
                </div>
            ))} */}
        </div>
    );
}

export default App;
