import { useEffect, useState } from "react";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import { webhookData } from "./assets/utils/webhookData";

function App() {
    const [responses, setResponses] = useState([]);
    const [level, setLevel] = useState(1);

    const [responsesLevel1, setResponsesLevel1] = useState({
        level: 1,
        jawaban: [],
    });

    const [responsesLevel2, setResponsesLevel2] = useState({
        level: 2,
        kriteria: [],
    });

    const [responsesLevel3, setResponsesLevel3] = useState({
        level: 3,
        kriteria: [],
    });
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

    function handleLevelChange(newLevel) {
        setLevel(newLevel + 1);
    }

    

    function handleSubmit() {
        const allResponses = [
            { ...responsesLevel1, level: 1 },
            { ...responsesLevel2, level: 2 },
            { ...responsesLevel3, level: 3 },
        ];
        setResponses(allResponses);
        
    }

    useEffect(() => {
        console.log(webhookData())
    }, []);

    return (
        <div className="container mx-auto p-4 ">
            <h1 className="text-3xl font-bold mb-4">
                KUISIONER PEMILIHAN E-WALLET TERBAIK UNTUK TRANSAKSI DIGITAL
                BAGI MAHASISWA
            </h1>
            {level === 1 ? (
                <Level1
                    hierarchyData={hierarchyData}
                    generatePairs={generatePairs}
                    responsesLevel1={responsesLevel1}
                    setResponsesLevel1={setResponsesLevel1}
                />
            ) : level === 2 ? (
                <Level2
                    hierarchyData={hierarchyData}
                    generatePairs={generatePairs}
                    responsesLevel2={responsesLevel2}
                    setResponsesLevel2={setResponsesLevel2}
                />
            ) : level === 3 ? (
                <Level3
                    hierarchyData={hierarchyData}
                    generatePairs={generatePairs}
                    responsesLevel3={responsesLevel3}
                    setResponsesLevel3={setResponsesLevel3}
                />
            ) : null}

            <button
                className="btn btn-primary mt-4"
                onClick={() => handleLevelChange(level)}
            >
                {level === 1
                    ? "Lanjut ke Level 2"
                    : level === 2
                    ? "Lanjut ke Level 3"
                    : "Selesai"}
            </button>
            {level === 4 && (
                <button
                    className="btn btn-success mt-4"
                    onClick={handleSubmit}
                >
                    Kirim Jawaban
                </button>
            )}
        </div>
    );
}

export default App;
