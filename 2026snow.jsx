import React, { useRef } from 'react';
import { Plane, Bus, MapPin, Snowflake, Camera, ShoppingBag, Info, Users, Baby, Thermometer, Map as MapIcon, ExternalLink, Clock, BedDouble, Star } from 'lucide-react';

const ItineraryWithMap = () => {
  // Google Maps Link
  const googleMapsUrl = "https://www.google.com/maps/dir/Chubu+Centrair+International+Airport/Nagoya,+Aichi/Takayama,+Gifu/Shirakawa,+Ono+District,+Gifu/Kyoto/Kansai+International+Airport/";

  // Refs for scrolling
  const refs = {
    day1: useRef(null),
    day2: useRef(null),
    day3: useRef(null),
    day4: useRef(null),
    day5: useRef(null),
    day6: useRef(null),
    day7: useRef(null),
  };

  const scrollToDay = (dayKey) => {
    if (refs[dayKey] && refs[dayKey].current) {
      refs[dayKey].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
            <Snowflake size={200} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide relative z-10">昇龍道 ⇄ 關西 慢遊雪見行</h1>
          <p className="text-blue-100 text-lg mb-6 relative z-10">2026年2月｜8大3小包車｜修正版行程</p>
          
          <div className="flex flex-wrap gap-2 relative z-10">
            <Badge icon={<Users size={14}/>} text="11人家族" />
            <Badge icon={<Bus size={14}/>} text="全程包車" highlight />
            <Badge icon={<Clock size={14}/>} text="含通勤時間" />
          </div>
        </div>

        {/* --- MAP SECTION --- */}
        <div className="bg-slate-50 p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <MapIcon className="mr-2 text-blue-600" /> 行程地圖 (點擊地點可跳轉)
            </h2>
            <button 
              onClick={() => window.open(googleMapsUrl, '_blank')}
              className="flex items-center text-sm bg-white border border-gray-300 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
            >
              <ExternalLink size={14} className="mr-1" /> Google Maps 開啟
            </button>
          </div>
          
          {/* Custom SVG Map Visualization */}
          <div className="w-full bg-white rounded-xl shadow-inner border border-gray-200 p-4 relative h-64 md:h-80 overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {/* Route Path */}
              <path 
                d="M 320 250 L 320 200 L 300 100 L 220 50 L 300 100 L 120 180 L 80 240" 
                fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 4" strokeLinecap="round" strokeLinejoin="round"
              />
               <path 
                d="M 320 250 L 320 200 L 300 100 L 220 50 L 300 100 L 120 180 L 80 240" 
                fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8 4" strokeLinecap="round" strokeLinejoin="round" className="animate-[dash_25s_linear_infinite]"
              />

              {/* Clickable Locations */}
              <MapPoint x={320} y={250} label="名古屋機場" type="start" onClick={() => scrollToDay('day1')} />
              <MapPoint x={320} y={200} label="Day1-2 名古屋" color="text-blue-600" onClick={() => scrollToDay('day1')} />
              <MapPoint x={300} y={100} label="Day3-4 高山" color="text-cyan-600" align="right" onClick={() => scrollToDay('day3')} />
              <MapPoint x={220} y={50} label="Day4 白川鄉" color="text-indigo-600" isSnow onClick={() => scrollToDay('day4')} />
              <MapPoint x={120} y={180} label="Day5-6 京都" color="text-rose-600" size="large" onClick={() => scrollToDay('day5')} />
              <MapPoint x={80} y={240} label="Day7 關西機場" color="text-slate-600" onClick={() => scrollToDay('day7')} />
            </svg>
            <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-white/80 px-2 py-1 rounded pointer-events-none">
              *點擊圓點查看詳情
            </div>
          </div>
        </div>
        {/* --- END MAP SECTION --- */}

        {/* Itinerary Timeline */}
        <div className="p-6 md:p-8 bg-white">
          
          <div ref={refs.day1}>
            <DayCard day="Day 1" title="抵達名古屋" loc="台北 ✈️ 名古屋" icon={<Plane/>} color="bg-blue-500">
               <CommuteTime time="機場 → 市區：約 45 分鐘" />
              <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1 mt-2">
                <li>接機，前往飯店辦理入住</li>
                <li>晚餐：<strong>蓬萊軒鰻魚飯</strong> (建議預約)</li>
                <li>住宿：<strong>名古屋市區</strong></li>
              </ul>
            </DayCard>
          </div>

          <div ref={refs.day2}>
            <DayCard day="Day 2" title="名古屋親子遊" loc="名古屋市區" icon={<Baby/>} color="bg-blue-400">
               <CommuteTime time="市區內短程移動" />
              <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1 mt-2">
                <li>推薦 A：<strong>名古屋港水族館</strong> (室內，適合冬天親子)</li>
                <li>推薦 B：<strong>樂高樂園</strong> (若小孩喜歡) 或 <strong>豐田產業技術紀念館</strong></li>
                <li>晚上：榮商圈 / 綠洲21 散步</li>
                <li>住宿：<strong>名古屋市區 (續住)</strong></li>
              </ul>
            </DayCard>
          </div>

          <div ref={refs.day3}>
            <DayCard day="Day 3" title="前往飛驒高山" loc="名古屋 ➔ 高山" icon={<Bus/>} color="bg-cyan-500">
              <CommuteTime time="移動時間：約 2.5 ~ 3 小時" />
              <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1 mt-2">
                <li>上午：專車北上，沿途欣賞雪景</li>
                <li>中午：抵達高山，品嚐<strong>飛驒牛午餐</strong></li>
                <li>下午：<strong>高山三町筋古街</strong>散策 (吃五平餅、飛驒牛握壽司)</li>
                <li>住宿：<strong>高山周邊或溫泉飯店</strong></li>
              </ul>
            </DayCard>
          </div>

          <div ref={refs.day4}>
            <DayCard day="Day 4" title="白川鄉合掌村 (輕裝往返)" loc="高山 ⇄ 白川鄉" icon={<Snowflake/>} color="bg-indigo-500">
              <CommuteTime time="單程約 50 分鐘 (往返約 2 小時)" />
              <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1 mt-2">
                <li>上午：前往<strong>宮川朝市</strong> (就在高山市區)</li>
                <li>接近中午：出發前往<strong>白川鄉合掌村</strong></li>
                <li>下午：合掌村童話世界拍照 (停留約 3-4 小時)</li>
                <li>傍晚：返回高山市區晚餐</li>
                <li>住宿：<strong>高山 (續住)</strong></li>
              </ul>
            </DayCard>
          </div>

          <div ref={refs.day5}>
            <DayCard day="Day 5" title="大移動日：前往京都" loc="高山 ➔ 京都" icon={<Bus/>} color="bg-rose-500">
              <CommuteTime time="移動時間：約 4 小時 (中途停休息站)" />
              <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1 mt-2">
                <li>上午：悠閒早餐，退房出發</li>
                <li>午餐：<strong>高速公路休息站 (Service Area)</strong> 體驗日本休息站美食</li>
                <li>下午：抵達京都，先至飯店放行李</li>
                <li>傍晚：<strong>祇園 / 花見小路</strong> 散步</li>
                <li>住宿：<strong>京都車站或四條周邊</strong></li>
              </ul>
            </DayCard>
          </div>

          <div ref={refs.day6}>
            <DayCard day="Day 6" title="京都經典巡禮" loc="京都市區" icon={<Camera/>} color="bg-rose-400">
               <CommuteTime time="市區內短程移動" />
              <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1 mt-2">
                <li>上午：<strong>清水寺</strong> (視體力) 或 <strong>金閣寺</strong> (平坦好走)</li>
                <li>下午：<strong>嵐山</strong> (竹林之道、渡月橋)</li>
                <li>晚餐：京都懷石料理 或 鴨川納涼床風格餐廳(冬季為室內)</li>
                <li>住宿：<strong>京都 (續住)</strong></li>
              </ul>
            </DayCard>
          </div>

          <div ref={refs.day7}>
            <DayCard day="Day 7" title="京都出發 & 返台" loc="京都 ➔ 關西機場" icon={<Plane/>} color="bg-slate-600">
              <CommuteTime time="京都 → 機場：約 1.5 ~ 2 小時" />
              <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1 mt-2">
                <li>上午：整理行李，車上休息</li>
                <li>中途可選：若時間充裕，可停 <strong>Rinku Outlet</strong> (臨空城) 最後購物</li>
                <li>下午：抵達<strong>關西國際機場 (KIX)</strong></li>
                <li>航班：大阪 ✈️ 台北</li>
              </ul>
            </DayCard>
          </div>
        </div>

        {/* --- HOTEL RECOMMENDATION SECTION --- */}
        <div className="bg-slate-50 p-6 md:p-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center mb-6">
            <BedDouble className="mr-2 text-amber-500" /> 嚴選高級住宿推薦 (Luxury Selection)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Nagoya Hotels */}
            <HotelGroup city="名古屋 Nagoya" color="border-blue-500">
              <HotelItem 
                name="Nagoya Marriott Associa Hotel" 
                desc="名古屋萬豪，直通名古屋車站，位置最便利，高樓層夜景無敵。" 
                tags={['位置No.1', '五星級']} 
              />
              <HotelItem 
                name="TIAD, Autograph Collection" 
                desc="2023新開幕奢華酒店，位於榮商圈，設計現代感十足，適合年輕家庭。" 
                tags={['新開幕', '設計感']} 
              />
              <HotelItem 
                name="The Tower Hotel Nagoya" 
                desc="位於名古屋電視塔內，極具特色與歷史感，房間可直接看到綠洲21。" 
                tags={['特色地標', '文青']} 
              />
            </HotelGroup>

            {/* Takayama Hotels */}
            <HotelGroup city="高山 Takayama" color="border-cyan-500">
              <HotelItem 
                name="Hidatei Hanaougi (飛驒亭 花扇)" 
                desc="頂級溫泉旅館，全館塌塌米，以飛驒牛料理與露天溫泉聞名。" 
                tags={['高級溫泉', '懷石料理']} 
              />
              <HotelItem 
                name="Honjin Hiranoya Kachoan" 
                desc="本陣平野屋 花兆庵，就在老街旁，服務極致細膩，適合帶長輩。" 
                tags={['服務至上', '老街旁']} 
              />
              <HotelItem 
                name="Hotel Associa Takayama Resort" 
                desc="位在山丘上的渡假飯店，有大型露天風呂可眺望北阿爾卑斯山，房間大。" 
                tags={['大浴場', '景觀佳']} 
              />
            </HotelGroup>

             {/* Kyoto Hotels */}
             <HotelGroup city="京都 Kyoto" color="border-rose-500">
              <HotelItem 
                name="The Ritz-Carlton, Kyoto" 
                desc="京都麗思卡爾頓，坐落鴨川畔，融合現代與傳統，京都最頂級體驗。" 
                tags={['頂級奢華', '鴨川景']} 
              />
              <HotelItem 
                name="Park Hyatt Kyoto" 
                desc="京都柏悅，位於二年坂旁，低調奢華，窗外就是八坂之塔，位置絕佳。" 
                tags={['絕景', '隱密性']} 
              />
              <HotelItem 
                name="Hotel The Mitsui Kyoto" 
                desc="三井豪華精選，就在二條城對面，擁有天然溫泉SPA，庭園極美。" 
                tags={['天然溫泉', '二條城旁']} 
              />
            </HotelGroup>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            * 旺季（2月、賞櫻、紅葉）請務必提前 5-6 個月預訂，尤其是高山與合掌村周邊。
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-gray-400 p-4 text-center text-xs">
           2026年2月 行程規劃草案
        </div>

      </div>
    </div>
  );
};

// Helper Components
const Badge = ({ icon, text, highlight }) => (
  <div className={`flex items-center px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${highlight ? 'bg-yellow-400 text-blue-900 shadow-md' : 'bg-white/20 text-white'}`}>
    <span className="mr-1.5">{icon}</span> {text}
  </div>
);

const CommuteTime = ({ time }) => (
  <div className="flex items-center text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded inline-block mb-1 border border-amber-100">
    <Clock size={12} className="mr-1" />
    {time}
  </div>
);

const DayCard = ({ day, title, loc, icon, color, children }) => (
  <div className="flex mb-5 last:mb-0 scroll-mt-24">
    <div className="flex flex-col items-center mr-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md z-10 ${color}`}>
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <div className="w-0.5 h-full bg-gray-200 mt-2 rounded-full"></div>
    </div>
    <div className="flex-1 pb-2">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-bold text-gray-800 text-lg">{title} <span className="text-xs font-normal text-gray-500 ml-2">({day})</span></h3>
      </div>
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
        <MapPin size={10} className="mr-1"/> {loc}
      </div>
      <div className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm hover:shadow-md transition-shadow">
        {children}
      </div>
    </div>
  </div>
);

const MapPoint = ({ x, y, label, color = "text-gray-600", type, isSnow, align, size, onClick }) => {
    const isLarge = size === 'large';
    return (
    <g transform={`translate(${x}, ${y})`} onClick={onClick} className="cursor-pointer group">
      <circle cx="0" cy="0" r={isLarge ? 12 : 8} fill="transparent" className="group-hover:fill-black/5 transition-colors" />
      <circle cx="0" cy="0" r={isLarge ? 6 : 4} fill="white" stroke="currentColor" strokeWidth="2" className={`${color} transition-transform group-hover:scale-125`} />
      {type === 'start' && (
        <circle cx="0" cy="0" r="8" stroke="currentColor" strokeWidth="1" className="text-gray-400 opacity-50 animate-ping" />
      )}
      {isSnow && (
        <text x="0" y="-10" textAnchor="middle" className="text-blue-300" fontSize="10">❄️</text>
      )}
      <text 
        x={align === 'right' ? 10 : 0} 
        y={align === 'right' ? 4 : 18} 
        textAnchor={align === 'right' ? "start" : "middle"} 
        className={`text-[10px] md:text-xs font-bold fill-current ${color} drop-shadow-sm select-none group-hover:font-extrabold`}
        style={{ textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff' }}
      >
        {label}
      </text>
    </g>
  )};

const HotelGroup = ({ city, color, children }) => (
  <div className={`bg-white rounded-xl shadow-sm border-t-4 ${color} p-4`}>
    <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">{city}</h3>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);

const HotelItem = ({ name, desc, tags }) => (
  <div>
    <h4 className="font-bold text-sm text-gray-700 flex items-center">
      {name}
    </h4>
    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-1 mt-1.5">
      {tags.map((tag, i) => (
        <span key={i} className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ItineraryWithMap;
