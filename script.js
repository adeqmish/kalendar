// --- 1. DATA CUTI TETAP (Berulang Setiap Tahun) ---
const fixedHolidays = {
    "0-1": "Tahun Baru",
    "0-14": "Hari Keputeraan YDPB Negeri Sembilan",
    "1-1": "Hari Wilayah Persekutuan",
    "2-4": "Ulang Tahun Pertabalan Sultan Terengganu",
    "2-23": "Hari Keputeraan Sultan Johor",
    "3-15": "Hari Perisytiharan Melaka Bandaraya Bersejarah",
    "3-26": "Hari Keputeraan Sultan Terengganu",
    "4-1": "Hari Pekerja",
    "4-17": "Hari Keputeraan Raja Perlis",
    "4-30": "Pesta Kaamatan",
    "4-31": "Pesta Kaamatan (Hari Kedua)",
    "5-1": "Hari Gawai",
    "5-2": "Hari Gawai (Hari Kedua)",
    "5-21": "Hari Keputeraan Sultan Kedah",
    "6-7": "Hari Warisan Dunia Georgetown",
    "6-30": "Hari Keputeraan Sultan Pahang",
    "7-31": "Hari Kebangsaan",
    "8-16": "Hari Malaysia",
    "10-11": "Hari Keputeraan Sultan Kelantan",
    "11-11": "Hari Keputeraan Sultan Selangor",
    "11-25": "Hari Krismas"
};

// --- 2. DATA CUTI BERGERAK (RAYA, CNY, DEEPAVALI - 2025 hingga 2030) ---
// Tarikh ini berdasarkan takwim jangkaan.
const dynamicHolidays = {
    "2025": {
        "0-29": "Tahun Baru Cina", "0-30": "TBC Hari Kedua",
        "0-27": "Israk Mikraj", "1-11": "Thaipusam", 
        "2-2": "Awal Ramadan", "2-17": "Nuzul Al-Quran",
        "2-31": "Hari Raya Aidilfitri", "3-1": "Aidilfitri Hari Kedua", // 31 Mac & 1 Apr
        "4-13": "Hari Wesak", "5-2": "Keputeraan YDPA Agong", 
        "5-6": "Hari Raya Aidiladha", // 6 Jun
        "5-27": "Awal Muharram", "8-9": "Maulidur Rasul", 
        "9-20": "Deepavali" // 20 Okt
    },
    "2026": {
        "1-17": "Tahun Baru Cina", "1-18": "TBC Hari Kedua",
        "2-20": "Hari Raya Aidilfitri", "2-21": "Aidilfitri Hari Kedua", // 20 Mac
        "4-27": "Hari Raya Aidiladha", // 27 Mei
        "10-8": "Deepavali" // 8 Nov
    },
    "2027": {
        "1-6": "Tahun Baru Cina", "1-7": "TBC Hari Kedua",
        "2-10": "Hari Raya Aidilfitri", "2-11": "Aidilfitri Hari Kedua", // 10 Mac
        "4-16": "Hari Raya Aidiladha", // 16 Mei
        "9-29": "Deepavali" // 29 Okt
    },
    "2028": {
        "0-26": "Tahun Baru Cina", "0-27": "TBC Hari Kedua",
        "1-27": "Hari Raya Aidilfitri", "1-28": "Aidilfitri Hari Kedua", // 27 Feb
        "4-5": "Hari Raya Aidiladha", // 5 Mei
        "9-17": "Deepavali" // 17 Okt
    },
    "2029": {
        "1-13": "Tahun Baru Cina", "1-14": "TBC Hari Kedua",
        "1-15": "Hari Raya Aidilfitri", "1-16": "Aidilfitri Hari Kedua", // 15 Feb
        "3-24": "Hari Raya Aidiladha", // 24 April
        "10-5": "Deepavali" // 5 Nov
    },
    "2030": {
        "1-3": "Tahun Baru Cina", "1-4": "TBC Hari Kedua",
        "1-4": "Hari Raya Aidilfitri", "1-5": "Aidilfitri Hari Kedua", // 4 Feb (Bertembung CNY!)
        "3-13": "Hari Raya Aidiladha", // 13 April
        "9-26": "Deepavali" // 26 Okt
    }
};

// --- 3. DATA GAMBAR (Untuk Cuti Tetap) ---
const holidayImages = {
    "0-1": "newyear.png",
    "0-14": "n9.png",
    "1-1": "wilayah.png",
    "2-4": "terengganu.png",
    "2-23": "johor.png",
    "3-15": "melaka.png",
    "3-26": "terengganu.png",
    "4-1": "labour.png",
    "4-17": "perlis.png",
    "4-30": "kaamatan.png",
    "4-31": "kaamatan.png",
    "5-1": "gawai.png",
    "5-2": "gawai.png",
    "5-21": "kedah.png",
    "6-7": "penang.png",
    "6-30": "pahang.png", 
    "7-31": "merdeka.png",
    "8-16": "malaysia.png",
    "10-11": "kelantan.png",
    "11-11": "selangor.png",
    "11-25": "christmas.png"
};

// --- 4. DATA GAMBAR PINTAR (Untuk Raya & Deepavali) ---
// Sistem ini akan detect NAMA cuti, dan letak gambar secara automatik
const dynamicImageMap = {
    "Tahun Baru Cina": "cny.png",
    "TBC Hari Kedua": "cny.png",
    
    "Hari Raya Aidilfitri": "raya.png", // Gambar Ketupat
    "Aidilfitri Hari Kedua": "raya.png",
    
    "Hari Raya Aidiladha": "haji.png",  // Gambar Masjid/Lembu
    
    "Deepavali": "deepavali.png"        // Gambar Pelita
};

// --- 5. DATA CUTI SEKOLAH (2025 Sahaja) ---
const schoolHolidayData = {
    "2025": [
        { m: 0, start: 18, end: 31 }, 
        { m: 1, start: 1, end: 16 },  
        { m: 4, start: 24, end: 31 }, 
        { m: 5, start: 1, end: 2 },   
        { m: 8, start: 13, end: 21 }, 
        { m: 11, start: 20, end: 31 } 
    ]
};

const monthNames = [
    "JANUARI", "FEBRUARI", "MAC", "APRIL", "MEI", "JUN",
    "JULAI", "OGOS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DISEMBER"
];

const hijriFormatter = new Intl.DateTimeFormat('ms-MY-u-ca-islamic-umalqura', {
    day: 'numeric', month: 'long', year: 'numeric'
});

// --- STATE ---
const todayDate = new Date();
let currentMonth = todayDate.getMonth();
let currentYear = todayDate.getFullYear();

// --- POPUP ---
function showPopup(title, msg) {
    const overlay = document.getElementById('custom-popup');
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-message').innerText = msg;
    overlay.classList.add('active');
}
function closePopup() { document.getElementById('custom-popup').classList.remove('active'); }
document.getElementById('custom-popup').addEventListener('click', (e) => { if (e.target.id === 'custom-popup') closePopup(); });

// --- FUNGSI UTAMA ---
function init() {
    renderCalendar(currentMonth, currentYear);
    document.getElementById('prevBtn').addEventListener('click', () => changeMonth(-1));
    document.getElementById('nextBtn').addEventListener('click', () => changeMonth(1));
}

function goToToday() {
    const now = new Date();
    currentMonth = now.getMonth();
    currentYear = now.getFullYear();
    renderCalendar(currentMonth, currentYear);
}

function changeMonth(step) {
    currentMonth += step;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; } 
    else if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar(currentMonth, currentYear);
}

function getHolidayName(day, month, year) {
    const key = `${month}-${day}`;
    if (fixedHolidays[key]) return fixedHolidays[key];
    if (dynamicHolidays[year] && dynamicHolidays[year][key]) return dynamicHolidays[year][key];
    return null;
}

function isSchoolHoliday(day, month, year) {
    if (schoolHolidayData[year]) {
        return schoolHolidayData[year].some(r => r.m === month && day >= r.start && day <= r.end);
    }
    return false;
}

function getHijriMonthName(month, year) {
    const date = new Date(year, month, 15);
    try {
        const parts = hijriFormatter.formatToParts(date);
        const hMonth = parts.find(p => p.type === 'month').value;
        const hYear = parts.find(p => p.type === 'year').value;
        return `${hMonth.toUpperCase()} ${hYear}`;
    } catch (e) { return "HIJRI"; }
}

function renderCalendar(month, year) {
    const grid = document.getElementById('calendar-grid');
    const displayMonth = document.getElementById('display-month');
    const displayHijri = document.getElementById('display-hijri');
    const holidayList = document.getElementById('holiday-list');
    
    const now = new Date();
    
    grid.innerHTML = '';
    holidayList.innerHTML = '';
    
    displayMonth.innerText = `${monthNames[month]} ${year}`;
    displayHijri.innerText = getHijriMonthName(month, year);
    
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let activeHolidays = [];

    for (let i = 0; i < firstDayIndex; i++) {
        const padding = document.createElement('div');
        grid.appendChild(padding);
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const box = document.createElement('div');
        box.className = 'date-box';
        
        const dayOfWeek = new Date(year, month, d).getDay(); 
        const holidayName = getHolidayName(d, month, year);
        const schoolHol = isSchoolHoliday(d, month, year);
        let isPublicHoliday = !!holidayName;

        if (d === now.getDate() && month === now.getMonth() && year === now.getFullYear()) {
            box.classList.add('is-today');
        }

        if (schoolHol) box.classList.add('is-school-holiday');
        if (isPublicHoliday) {
            box.classList.add('is-holiday');
            activeHolidays.push({ date: d, name: holidayName });
        }
        
        if (dayOfWeek === 6) box.classList.add('is-saturday');
        if (dayOfWeek === 0) {
            box.classList.add('day-sunday');
            if(!isPublicHoliday) box.classList.add('is-holiday');
        }

        let html = `<span class="date-number">${d}</span>`;
        if (isPublicHoliday) html += `<div class="holiday-dot"></div>`;
        
        // --- LOGIC GAMBAR (INTELLIGENT) ---
        let specialImage = null;

        // 1. Check Tarikh Tetap (Merdeka, Krismas, etc)
        if (holidayImages[`${month}-${d}`]) {
            specialImage = holidayImages[`${month}-${d}`];
        } 
        // 2. Check Nama Cuti (Raya, CNY, Deepavali)
        else if (holidayName && dynamicImageMap[holidayName]) {
            specialImage = dynamicImageMap[holidayName];
        }

        if (specialImage) {
            html += `<img src="assets/${specialImage}" class="horse-icon-grid" alt="Holiday">`;
        } else if (dayOfWeek === 0 || dayOfWeek === 6) {
            html += `<img src="assets/kuda.png" class="horse-icon-grid" alt="Race">`;
        }

        box.innerHTML = html;
        
        if (box.classList.contains('is-today')) {
            box.onclick = () => showPopup(`📅 Hari Ini`, `${d} ${monthNames[month]} ${year}\nSemoga hari anda ceria!`);
        } else if (isPublicHoliday) {
            box.onclick = () => showPopup(`🎉 Cuti Umum`, `${holidayName}\n(${d} ${monthNames[month]})`);
        } else if (schoolHol) {
            box.onclick = () => showPopup(`🏫 Cuti Sekolah`, `Tarikh ini jatuh dalam musim cuti sekolah.`);
        }

        grid.appendChild(box);
    }

    if (activeHolidays.length === 0) {
        let msg = "TIADA CUTI UMUM BULAN INI.";
        // Kalau tahun jauh sangat (contoh 2031) dan tiada data dynamic
        if (!dynamicHolidays[year] && year > 2025) msg = "DATA TAHUN INI BELUM DIKEMASKINI.";
        holidayList.innerHTML = `<li style="padding:15px; color:#555; text-align:center;">${msg}</li>`;
    } else {
        activeHolidays.forEach(h => {
            const li = document.createElement('li');
            li.className = 'holiday-item';
            li.innerHTML = `
                <div class="date-pill">${h.date}</div>
                <div class="holiday-name">${h.name}</div>
            `;
            holidayList.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', init);
