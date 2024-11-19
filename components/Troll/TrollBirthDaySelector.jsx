import { useEffect, useState } from "react"



export default function TrollBirthDaySelector() {

  const [selectedPresidentIndex, setSelectedPresidentIndex] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)

  const presidents = [
    {
      id: 1,
      ordinal: 1,
      name: 'George Washington',
      yearsInOffice: [
        1789, 1790, 1791,
        1792, 1793, 1794,
        1795, 1796, 1797
      ],
      vicePresidents: ['John Adams'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/220px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg'
    },
    {
      id: 2,
      ordinal: 2,
      name: 'John Adams',
      yearsInOffice: [1797, 1798, 1799, 1800, 1801],
      vicePresidents: ['Thomas Jefferson'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/John_Adams_A18236.jpg'
    },
    {
      id: 3,
      ordinal: 3,
      name: 'Thomas Jefferson',
      yearsInOffice: [
        1801, 1802, 1803,
        1804, 1805, 1806,
        1807, 1808, 1809
      ],
      vicePresidents: ['Aaron Burr', 'George Clinton'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg/220px-Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg'
    },
    {
      id: 4,
      ordinal: 4,
      name: 'James Madison',
      yearsInOffice: [
        1809, 1810, 1811,
        1812, 1813, 1814,
        1815, 1816, 1817
      ],
      vicePresidents: ['George Clinton', 'Elbridge Gerry'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/James_Madison%28cropped%29%28c%29.jpg/220px-James_Madison%28cropped%29%28c%29.jpg'
    },
    {
      id: 5,
      ordinal: 5,
      name: 'James Monroe',
      yearsInOffice: [
        1817, 1818, 1819,
        1820, 1821, 1822,
        1823, 1824, 1825
      ],
      vicePresidents: ['Daniel D. Tompkins'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/James_Monroe_White_House_portrait_1819.jpg/220px-James_Monroe_White_House_portrait_1819.jpg'
    },
    {
      id: 6,
      ordinal: 6,
      name: 'John Quincy Adams',
      yearsInOffice: [1825, 1826, 1827, 1828, 1829],
      vicePresidents: ['John C. Calhoun'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/JQA_Photo.tif_%28cropped%29.jpg/220px-JQA_Photo.tif_%28cropped%29.jpg'
    },
    {
      id: 7,
      ordinal: 7,
      name: 'Andrew Jackson',
      yearsInOffice: [
        1829, 1830, 1831,
        1832, 1833, 1834,
        1835, 1836, 1837
      ],
      vicePresidents: ['John C. Calhoun', 'Martin Van Buren'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Andrew_jackson_headFXD.jpg/220px-Andrew_jackson_headFXD.jpg'
    },
    {
      id: 8,
      ordinal: 8,
      name: 'Martin Van Buren',
      yearsInOffice: [1837, 1838, 1839, 1840, 1841],
      vicePresidents: ['Richard Mentor Johnson'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Martin_Van_Buren_by_Mathew_Brady_c1855-58.jpg/220px-Martin_Van_Buren_by_Mathew_Brady_c1855-58.jpg'
    },
    {
      id: 9,
      ordinal: 9,
      name: 'William Henry Harrison',
      yearsInOffice: [1841],
      vicePresidents: ['John Tyler'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/William_Henry_Harrison_daguerreotype_edit.jpg/220px-William_Henry_Harrison_daguerreotype_edit.jpg'
    },
    {
      id: 10,
      ordinal: 10,
      name: 'John Tyler',
      yearsInOffice: [1841, 1842, 1843, 1844, 1845],
      vicePresidents: ['None'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Tyler_Daguerreotype_%28restoration%29.jpg/220px-Tyler_Daguerreotype_%28restoration%29.jpg'
    },
    {
      id: 11,
      ordinal: 11,
      name: 'James K. Polk',
      yearsInOffice: [1845, 1846, 1847, 1848, 1849],
      vicePresidents: ['George M. Dallas'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/James_Polk_restored.jpg/220px-James_Polk_restored.jpg'
    },
    {
      id: 12,
      ordinal: 12,
      name: 'Zacary Taylor',
      yearsInOffice: [1849, 1850],
      vicePresidents: ['Millard Fillmore'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Zachary_Taylor_restored_and_cropped.jpg/220px-Zachary_Taylor_restored_and_cropped.jpg'
    },
    {
      id: 13,
      ordinal: 13,
      name: 'Millard Fillmore',
      yearsInOffice: [1850, 1851, 1852, 1853],
      vicePresidents: ['None'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Millard_Fillmore.jpg/220px-Millard_Fillmore.jpg'
    },
    {
      id: 14,
      ordinal: 14,
      name: 'Franklin Pierce',
      yearsInOffice: [1853, 1854, 1855, 1856, 1857],
      vicePresidents: ['William R. King'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mathew_Brady_-_Franklin_Pierce_-_alternate_crop.jpg/220px-Mathew_Brady_-_Franklin_Pierce_-_alternate_crop.jpg'
    },
    {
      id: 15,
      ordinal: 15,
      name: 'James Buchanan',
      yearsInOffice: [1857, 1858, 1859, 1860, 1861],
      vicePresidents: ['John C. Breckinridge'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/James_Buchanan.jpg/220px-James_Buchanan.jpg'
    },
    {
      id: 16,
      ordinal: 16,
      name: 'Abraham Lincoln',
      yearsInOffice: [1861, 1862, 1863, 1864, 1865],
      vicePresidents: ['Hannibal Hamlin', 'Andrew John'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/220px-Abraham_Lincoln_O-77_matte_collodion_print.jpg'
    },
    {
      id: 17,
      ordinal: 17,
      name: 'Andrew Johnson',
      yearsInOffice: [1865, 1866, 1867, 1868, 1869],
      vicePresidents: ['None'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/President_Andrew_Johnson.jpg/220px-President_Andrew_Johnson.jpg'
    },
    {
      id: 18,
      ordinal: 18,
      name: 'Ulysses S. Grant',
      yearsInOffice: [
        1869, 1870, 1871,
        1872, 1873, 1874,
        1875, 1876, 1877
      ],
      vicePresidents: ['Schuyler Colfax', 'Henry Wilson'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ulysses_S._Grant_1870-1880.jpg/220px-Ulysses_S._Grant_1870-1880.jpg'
    },
    {
      id: 19,
      ordinal: 19,
      name: 'Rutherford B. Hayes',
      yearsInOffice: [1877, 1878, 1879, 1880, 1881],
      vicePresidents: ['William A. Wheeler'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/President_Rutherford_Hayes_1870_-_1880_Restored.jpg/220px-President_Rutherford_Hayes_1870_-_1880_Restored.jpg'
    },
    {
      id: 20,
      ordinal: 20,
      name: 'James A. Garfield',
      yearsInOffice: [1881],
      vicePresidents: ['Chester A. Arthur'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/James_Abram_Garfield%2C_photo_portrait_seated.jpg/220px-James_Abram_Garfield%2C_photo_portrait_seated.jpg'
    },
    {
      id: 21,
      ordinal: 21,
      name: 'Chester A. Arthur',
      yearsInOffice: [1881, 1882, 1883, 1884, 1885],
      vicePresidents: ['None'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Chester_Alan_Arthur.jpg/220px-Chester_Alan_Arthur.jpg'
    },
    {
      id: 22,
      ordinal: 22,
      name: 'Grover Cleveland',
      yearsInOffice: [1893, 1894, 1895, 1896, 1897],
      vicePresidents: ['Adlai Stevenson I'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg/220px-Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg'
    },
    {
      id: 23,
      ordinal: 23,
      name: 'Benjamin Harrison',
      yearsInOffice: [1889, 1890, 1891, 1892, 1893],
      vicePresidents: ['Levi P. Morton'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Pach_Brothers_-_Benjamin_Harrison.jpg/220px-Pach_Brothers_-_Benjamin_Harrison.jpg'
    },
    {
      id: 24,
      ordinal: 24,
      name: 'Grover Cleveland',
      yearsInOffice: [1893, 1894, 1895, 1896, 1897],
      vicePresidents: ['Adlai Stevenson I'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg/220px-Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg'
    },
    {
      id: 25,
      ordinal: 25,
      name: 'William McKinley',
      yearsInOffice: [1897, 1898, 1899, 1900, 1901],
      vicePresidents: ['Garret Hobart', 'Theodore Roosevelt'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mckinley.jpg/220px-Mckinley.jpg'
    },
    {
      id: 26,
      ordinal: 26,
      name: 'Theodore Roosevelt',
      yearsInOffice: [
        1901, 1902, 1903,
        1904, 1905, 1906,
        1907, 1908, 1909
      ],
      vicePresidents: ['Charles W. Fairbanks'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/President_Roosevelt_-_Pach_Bros.jpg/220px-President_Roosevelt_-_Pach_Bros.jpg'
    },
    {
      id: 27,
      ordinal: 27,
      name: 'William Howard Taft',
      yearsInOffice: [1909, 1910, 1911, 1912, 1913],
      vicePresidents: ['James S. Sherman'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/William_Howard_Taft_cph.3b35813.jpg/220px-William_Howard_Taft_cph.3b35813.jpg'
    },
    {
      id: 28,
      ordinal: 28,
      name: 'Woodrow Wilson',
      yearsInOffice: [
        1913, 1914, 1915,
        1916, 1917, 1918,
        1919, 1920, 1921
      ],
      vicePresidents: ['Thomas R. Marshall'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/President_Wilson_1919-bw.tif/lossless-page1-220px-President_Wilson_1919-bw.tif.png'
    },
    {
      id: 29,
      ordinal: 29,
      name: 'Warren G. Harding',
      yearsInOffice: [1921, 1922, 1923],
      vicePresidents: ['Calvin Coolidge'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Warren_G_Harding-Harris_%26_Ewing.jpg/220px-Warren_G_Harding-Harris_%26_Ewing.jpg'
    },
    {
      id: 30,
      ordinal: 30,
      name: 'Calvin Coolidge',
      yearsInOffice: [1923, 1924, 1925],
      vicePresidents: ['Charles G. Dawes'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Calvin_Coolidge%2C_bw_head_and_shoulders_photo_portrait_seated%2C_1919.jpg/220px-Calvin_Coolidge%2C_bw_head_and_shoulders_photo_portrait_seated%2C_1919.jpg'
    },
    {
      id: 31,
      ordinal: 31,
      name: 'Herbert Hoover',
      yearsInOffice: [1929, 1930, 1931, 1932, 1933],
      vicePresidents: ['Charles Curtis'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/President_Hoover_portrait.jpg/220px-President_Hoover_portrait.jpg'
    },
    {
      id: 32,
      ordinal: 32,
      name: 'Franklin D. Roosevelt',
      yearsInOffice: [
        1933, 1934, 1935,
        1936, 1937, 1938,
        1939, 1940, 1941,
        1942, 1943, 1944,
        1945
      ],
      vicePresidents: ['John N. Garner', 'Henry A. Wallace', 'Harry S. Truman'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_1944_Color_Portrait.jpg/220px-FDR_1944_Color_Portrait.jpg'
    },
    {
      id: 33,
      ordinal: 33,
      name: 'Harry S. Truman',
      yearsInOffice: [
        1945, 1946, 1947,
        1948, 1949, 1950,
        1951, 1952, 1953
      ],
      vicePresidents: ['Alben W. Barkley'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Harry_S_Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945-crop.jpg/220px-Harry_S_Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945-crop.jpg'
    },
    {
      id: 34,
      ordinal: 34,
      name: 'Dwight D. Eisenhower',
      yearsInOffice: [
        1953, 1954, 1955,
        1956, 1957, 1958,
        1959, 1960, 1961
      ],
      vicePresidents: ['Richard Nixon'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg/220px-Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg'
    },
    {
      id: 35,
      ordinal: 35,
      name: 'John F. Kennedy',
      yearsInOffice: [1961, 1962, 1963],
      vicePresidents: ['Lyndon B. Johnson'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_F._Kennedy%2C_White_House_photo_portrait%2C_looking_up.jpg/220px-John_F._Kennedy%2C_White_House_photo_portrait%2C_looking_up.jpg'
    },
    {
      id: 36,
      ordinal: 36,
      name: 'Lyndon B. Johnson',
      yearsInOffice: [
        1963, 1964,
        1965, 1966,
        1967, 1968,
        1969
      ],
      vicePresidents: ['Hubert Humphrey'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/37_Lyndon_Johnson_3x4.jpg/220px-37_Lyndon_Johnson_3x4.jpg'
    },
    {
      id: 37,
      ordinal: 37,
      name: 'Richard Nixon',
      yearsInOffice: [1969, 1970, 1971, 1972, 1973, 1974],
      vicePresidents: ['Spiro Agnew', 'Gerald Ford'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Richard_M._Nixon%2C_ca._1935_-_1982_-_NARA_-_530679.jpg/220px-Richard_M._Nixon%2C_ca._1935_-_1982_-_NARA_-_530679.jpg'
    },
    {
      id: 38,
      ordinal: 38,
      name: 'Gerald Ford',
      yearsInOffice: [1974, 1975, 1976, 1977],
      vicePresidents: ['Nelson Rockefeller'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gerald_Ford%28cropped%29.jpg/220px-Gerald_Ford%28cropped%29.jpg'
    },
    {
      id: 39,
      ordinal: 39,
      name: 'Jimmy Carter',
      yearsInOffice: [1977, 1978, 1979, 1980, 1981],
      vicePresidents: ['Walter Mondale'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/JimmyCarterPortrait2.jpg/220px-JimmyCarterPortrait2.jpg'
    },
    {
      id: 40,
      ordinal: 40,
      name: 'Ronald Reagan',
      yearsInOffice: [
        1981, 1982, 1983,
        1984, 1985, 1986,
        1987, 1988, 1989
      ],
      vicePresidents: ['George H.W. Bush'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/220px-Official_Portrait_of_President_Reagan_1981.jpg'
    },
    {
      id: 41,
      ordinal: 41,
      name: 'George H. W. Bush',
      yearsInOffice: [1989, 1990, 1991, 1992, 1993],
      vicePresidents: ['Dan Quayle'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait_cropped%28b%29.jpg/220px-George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait_cropped%28b%29.jpg'
    },
    {
      id: 42,
      ordinal: 42,
      name: 'Bill Clinton',
      yearsInOffice: [
        1993, 1994, 1995,
        1996, 1997, 1998,
        1999, 2000, 2001
      ],
      vicePresidents: ['Al Gore'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/220px-Bill_Clinton.jpg'
    },
    {
      id: 43,
      ordinal: 43,
      name: 'George W. Bush',
      yearsInOffice: [
        2001, 2002, 2003,
        2004, 2005, 2006,
        2007, 2008, 2009
      ],
      vicePresidents: ['Dick Cheney'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/220px-George-W-Bush.jpeg'
    },
    {
      id: 44,
      ordinal: 44,
      name: 'Barack Obama',
      yearsInOffice: [
        2009, 2010, 2011,
        2012, 2013, 2014,
        2015, 2016, 2017
      ],
      vicePresidents: ['Joe Biden'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/220px-President_Barack_Obama.jpg'
    },
    {
      id: 45,
      ordinal: 45,
      name: 'Donald Trump',
      yearsInOffice: [2017, 2018, 2019, 2020],
      vicePresidents: ['Mike Pence'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg'
    },
    {
      id: 46,
      ordinal: 46,
      name: 'Joseph Biden',
      yearsInOffice: [2020, 2021, 2022, 2023, 2024],
      vicePresidents: ['Kamala Harris'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/440px-Joe_Biden_presidential_portrait.jpg'
    }
  ]

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        DON'T
      </h1>
      <div className="relative flex items-center space-x-4 bg-gray-900 p-4 rounded-lg w-[300px]">
        <div className="flex flex-col w-full space-y-4">
          <div className="relative">
            <select
              className="w-full bg-gray-800 text-gray-300 p-2 rounded-lg border border-gray-700 
                                     focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
                                     appearance-none cursor-pointer transition-colors"
              onChange={(e) => {
                setSelectedPresidentIndex(e.target.value === "" ? null : Number(e.target.value));
                setSelectedYear(null);
              }}
              value={selectedPresidentIndex ?? ""}
            >
              <option value="">Choose a President...</option>
              {presidents.map((president, index) => (
                <option
                  key={index}
                  value={index}
                  className="bg-gray-800 text-gray-300"
                >
                  {president.name}
                </option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              className="w-full bg-gray-800 text-gray-300 p-2 rounded-lg border border-gray-700 
                                     focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
                                     appearance-none cursor-pointer transition-colors
                                     disabled:opacity-50 disabled:cursor-not-allowed"
              onChange={(e) => setSelectedYear(e.target.value)}
              value={selectedYear ?? ""}
              disabled={selectedPresidentIndex == null}
            >
              <option value="">Choose a Year...</option>
              {selectedPresidentIndex !== null && presidents[selectedPresidentIndex]?.yearsInOffice.map((year) => (
                <option
                  key={year}
                  value={year}
                  className="bg-gray-800 text-gray-300"
                >
                  {year}
                </option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}