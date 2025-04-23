
export function webhookData(data, indentitas) {
    const level1Value = data[0]?.jawaban.map((item) => {
        return  `${item.pilihan[0]} ${item.selected === item.pilihan[0] ? '🟢 🔴' : '🔴 🟢'} ${item.pilihan[1]} = ${item.tingkatKepentingan}`
        
    });

    const level2 = data[1]?.kriteria.map((item) => {
        const value = item.jawaban.map((subItem) => {   
            return `${subItem.pilihan[0]} ${subItem.selected === subItem.pilihan[0] ? '🟢 🔴' : '🔴 🟢'} ${subItem.pilihan[1]} = ${subItem.tingkatKepentingan}`
        });
        return {
            name : `Berdasarkan kriteria “${item.kriteriaName}”, sub-kriteria manakah yang lebih penting dari perbandingan sub-kriteria – sub-kriteria berikut ?`,
            value: value.join('\n')
        }
    });

    const level3 = data[2]?.kriteria.map((item) => {
        const value = item.jawaban.map((subItem) => {   
            return `${subItem.pilihan[0]} ${subItem.selected === subItem.pilihan[0] ? '🟢 🔴' : '🔴 🟢'} ${subItem.pilihan[1]} = ${subItem.tingkatKepentingan}`
        });
        return {
            name : `Berdasarkan sub-kriteria “${item.subCriteriaName}”, alternatif strategis manakah yang lebih penting dari perbandingan alternatif-alternatif strategis berikut ini?`,
            value: value.join('\n')
        }
    });

    const webhook = {
        content:
            "**KUISIONER PEMILIHAN E-WALLET TERBAIK UNTUK TRANSAKSI DIGITAL BAGI MAHASISWA**",
        embeds: [
            {
                title: "👨🏻‍🎓Indentitas Responden",
                description:
                    `**Nama: ${indentitas.nama}**\n**Jenis Kelamin : ${indentitas.jenisKelamin}**\n**Asal Kampus: ${indentitas.asalKampus}**`,
                color: 16722731,
                timestamp: `${new Date().toISOString()}`,
            },
            {
                title: "Level 1 - Perbandingan Kriteria",
                color: 5814783,
                fields: [
                    {
                        name: "Dalam menentukan e-Wallet Terbaik Untuk Transaksi Digital Bagi Mahasiswa, kriteria manakah yang lebih penting dibandingkan kriteria-kriteria berikut ?",
                        value: level1Value.join("\n"),
                    },
                ],
            },
            {
                title: "LEVEL 2 : PERBANDINGAN SUB-KRITERIA",
                color: 5814783,
                fields: level2,
            },
            {
                title: "LEVEL 3 : PERBANDINGAN ALTERNATIF STRATEGIS",
                color: 5814783,
                fields: level3,
            },
        ],
        attachments: [],
    };

    return webhook;
}
