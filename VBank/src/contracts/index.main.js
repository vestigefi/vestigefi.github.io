// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  
  return {
    infos: {
      Viewer: {
        getTokens: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v1740, v1741, v1742, v1743, v1744, v1745, v1746, v1747, v1748, v1770, v1806, v1834] = svs;
              return (await ((async () => {
                
                const v1835 = [v1806, v1770];
                
                return v1835;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871] = svs;
              return (await ((async () => {
                
                const v1835 = [v1806, v1770];
                
                return v1835;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          },
        read: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v1740, v1741, v1742, v1743, v1744, v1745, v1746, v1747, v1748, v1770, v1806, v1834] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871] = svs;
              return (await ((async () => {
                
                const v1891 = [v1858, v1860, v1859, v1849, v1850, v1863, v1848, v1857, v1847, v1861, v1862, v1853, v1852, v1856, v1855, v1854, v1851];
                
                return v1891;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc7
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc5],
      4: [ctc0, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc4 = stdlib.T_Object({
    decimals: ctc0,
    metadata: ctc1,
    name: ctc1,
    supply: ctc0,
    symbol: ctc2,
    url: ctc3
    });
  const ctc5 = stdlib.T_Object({
    adminFeeRatio: ctc0,
    initialBaseCurrencyPrice: ctc0,
    maxReserveRatio: ctc0,
    minRCPrice: ctc0,
    minReserveRatio: ctc0,
    protocolFeeRatio: ctc0,
    reserveCoinParam: ctc4,
    stableCoinParam: ctc4,
    thresholdStableCoin: ctc0,
    totalFee: ctc0
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0]);
  const ctc11 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_194: ctc8,
    AdminAPI_setAdminFee0_194: ctc9,
    AdminAPI_updatePrice0_194: ctc10,
    Claimant_burnReserve0_194: ctc10,
    Claimant_burnStable0_194: ctc10,
    Claimant_mintReserve0_194: ctc10,
    Claimant_mintStable0_194: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc0, ctc0, ctc12]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v1690 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1691 = [v1690, v1690];
  const v1697 = stdlib.protect(ctc5, await interact.setInitialParam(), {
    at: './index.rsh:69:48:application',
    fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)'],
    msg: 'setInitialParam',
    who: 'Admin'
    });
  const v1698 = v1697.adminFeeRatio;
  const v1699 = v1697.initialBaseCurrencyPrice;
  const v1700 = v1697.maxReserveRatio;
  const v1701 = v1697.minRCPrice;
  const v1702 = v1697.minReserveRatio;
  const v1703 = v1697.protocolFeeRatio;
  const v1704 = v1697.reserveCoinParam;
  const v1705 = v1697.stableCoinParam;
  const v1706 = v1697.thresholdStableCoin;
  const v1707 = v1697.totalFee;
  const v1711 = v1704.supply;
  const v1717 = v1705.supply;
  const v1730 = stdlib.add(v1698, v1703);
  const v1731 = stdlib.eq(v1730, stdlib.checkedBigNumberify('./index.rsh:70:52:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v1731, {
    at: './index.rsh:70:15:application',
    fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v1733 = stdlib.gt(v1711, stdlib.checkedBigNumberify('./index.rsh:71:42:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1733, {
    at: './index.rsh:71:15:application',
    fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v1735 = stdlib.gt(v1717, stdlib.checkedBigNumberify('./index.rsh:72:41:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1735, {
    at: './index.rsh:72:15:application',
    fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v1737 = stdlib.eq(v1711, stdlib.UInt_max);
  stdlib.assert(v1737, {
    at: './index.rsh:73:15:application',
    fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v1739 = stdlib.eq(v1717, stdlib.UInt_max);
  stdlib.assert(v1739, {
    at: './index.rsh:74:15:application',
    fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)'],
    msg: null,
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1707, v1698, v1703, v1702, v1700, v1699, v1701, v1706, v1704, v1705],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:78:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1741, v1742, v1743, v1744, v1745, v1746, v1747, v1748, v1749, v1750], secs: v1752, time: v1751, didSend: v78, from: v1740 } = txn1;
      
      ;
      const v1755 = v1749.supply;
      const v1757 = v1750.supply;
      const v1763 = v1749.decimals;
      const v1764 = v1749.metadata;
      const v1765 = v1749.name;
      const v1767 = v1749.symbol;
      const v1768 = v1749.url;
      const v1769 = stdlib.simTokenNew(sim_r, v1765, v1767, v1768, v1764, v1755, v1763, getSimTokCtr());
      const v1770 = await txn1.getOutput('internal', 'v1769', ctc6, v1769);
      const v1780 = v1691[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
      const v1782 = v1780[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '1')];
      const v1783 = v1780[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '2')];
      const v1784 = [v1755, v1782, v1783];
      const v1785 = stdlib.Array_set(v1691, stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0'), v1784);
      const v1787 = v1785[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
      const v1788 = v1787[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
      const v1790 = v1787[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '2')];
      const v1791 = [v1788, v1755, v1790];
      const v1792 = stdlib.Array_set(v1785, stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0'), v1791);
      const v1793 = v1792[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
      const v1794 = v1793[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
      const v1795 = v1793[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '1')];
      const v1797 = [v1794, v1795, false];
      const v1798 = stdlib.Array_set(v1792, stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0'), v1797);
      const v1799 = v1750.decimals;
      const v1800 = v1750.metadata;
      const v1801 = v1750.name;
      const v1803 = v1750.symbol;
      const v1804 = v1750.url;
      const v1805 = stdlib.simTokenNew(sim_r, v1801, v1803, v1804, v1800, v1757, v1799, getSimTokCtr());
      const v1806 = await txn1.getOutput('internal', 'v1805', ctc6, v1805);
      const v1816 = v1798[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
      const v1818 = v1816[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
      const v1819 = v1816[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '2')];
      const v1820 = [v1757, v1818, v1819];
      const v1821 = stdlib.Array_set(v1798, stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1'), v1820);
      const v1823 = v1821[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
      const v1824 = v1823[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '0')];
      const v1826 = v1823[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '2')];
      const v1827 = [v1824, v1757, v1826];
      const v1828 = stdlib.Array_set(v1821, stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1'), v1827);
      const v1829 = v1828[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
      const v1830 = v1829[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '0')];
      const v1831 = v1829[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
      const v1833 = [v1830, v1831, false];
      const v1834 = stdlib.Array_set(v1828, stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1'), v1833);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v1741, v1742, v1743, v1744, v1745, v1746, v1747, v1748, v1749, v1750], secs: v1752, time: v1751, didSend: v78, from: v1740 } = txn1;
  ;
  const v1753 = stdlib.add(v1742, v1743);
  const v1754 = stdlib.eq(v1753, stdlib.checkedBigNumberify('./index.rsh:91:49:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v1754, {
    at: './index.rsh:91:12:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v1755 = v1749.supply;
  const v1756 = stdlib.gt(v1755, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1756, {
    at: './index.rsh:92:12:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v1757 = v1750.supply;
  const v1758 = stdlib.gt(v1757, stdlib.checkedBigNumberify('./index.rsh:93:38:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1758, {
    at: './index.rsh:93:12:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v1760 = stdlib.eq(v1755, stdlib.UInt_max);
  stdlib.assert(v1760, {
    at: './index.rsh:94:12:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v1762 = stdlib.eq(v1757, stdlib.UInt_max);
  stdlib.assert(v1762, {
    at: './index.rsh:95:12:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v1763 = v1749.decimals;
  const v1764 = v1749.metadata;
  const v1765 = v1749.name;
  const v1767 = v1749.symbol;
  const v1768 = v1749.url;
  const v1769 = undefined /* TokenNew */;
  const v1770 = await txn1.getOutput('internal', 'v1769', ctc6, v1769);
  const v1780 = v1691[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
  const v1782 = v1780[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '1')];
  const v1783 = v1780[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '2')];
  const v1784 = [v1755, v1782, v1783];
  const v1785 = stdlib.Array_set(v1691, stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0'), v1784);
  const v1787 = v1785[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
  const v1788 = v1787[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
  const v1790 = v1787[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '2')];
  const v1791 = [v1788, v1755, v1790];
  const v1792 = stdlib.Array_set(v1785, stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0'), v1791);
  const v1793 = v1792[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
  const v1794 = v1793[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0')];
  const v1795 = v1793[stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '1')];
  const v1797 = [v1794, v1795, false];
  const v1798 = stdlib.Array_set(v1792, stdlib.checkedBigNumberify('./index.rsh:98:39:application', stdlib.UInt_max, '0'), v1797);
  const v1799 = v1750.decimals;
  const v1800 = v1750.metadata;
  const v1801 = v1750.name;
  const v1803 = v1750.symbol;
  const v1804 = v1750.url;
  const v1805 = undefined /* TokenNew */;
  const v1806 = await txn1.getOutput('internal', 'v1805', ctc6, v1805);
  const v1807 = [v1770];
  const v6104 = v1807[stdlib.checkedBigNumberify('reach standard library:154:21:application', stdlib.UInt_max, '0')];
  const v6108 = stdlib.tokenEq(v1806, v6104);
  const v1815 = v6108 ? false : true;
  stdlib.assert(v1815, {
    at: './index.rsh:100:38:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Admin'
    });
  const v1816 = v1798[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
  const v1818 = v1816[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
  const v1819 = v1816[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '2')];
  const v1820 = [v1757, v1818, v1819];
  const v1821 = stdlib.Array_set(v1798, stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1'), v1820);
  const v1823 = v1821[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
  const v1824 = v1823[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '0')];
  const v1826 = v1823[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '2')];
  const v1827 = [v1824, v1757, v1826];
  const v1828 = stdlib.Array_set(v1821, stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1'), v1827);
  const v1829 = v1828[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
  const v1830 = v1829[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '0')];
  const v1831 = v1829[stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1')];
  const v1833 = [v1830, v1831, false];
  const v1834 = stdlib.Array_set(v1828, stdlib.checkedBigNumberify('./index.rsh:100:38:application', stdlib.UInt_max, '1'), v1833);
  const v1836 = v1834[stdlib.checkedBigNumberify('./index.rsh:104:20:application', stdlib.UInt_max, '1')];
  const v1837 = v1836[stdlib.checkedBigNumberify('./index.rsh:104:20:application', stdlib.UInt_max, '0')];
  const v1838 = stdlib.eq(v1837, v1757);
  stdlib.assert(v1838, {
    at: './index.rsh:104:12:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const v1839 = v1834[stdlib.checkedBigNumberify('./index.rsh:105:20:application', stdlib.UInt_max, '0')];
  const v1840 = v1839[stdlib.checkedBigNumberify('./index.rsh:105:20:application', stdlib.UInt_max, '0')];
  const v1841 = stdlib.eq(v1840, v1755);
  stdlib.assert(v1841, {
    at: './index.rsh:105:12:application',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v1740, v1741, v1742, v1743, v1744, v1745, v1746, v1747, v1748, v1770, v1806, v1834],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1751,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:109:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v1844, time: v1843, didSend: v138, from: v1842 } = txn2;
      
      ;
      
      const v1847 = stdlib.checkedBigNumberify('./index.rsh:137:13:decimal', stdlib.UInt_max, '0');
      const v1848 = v1742;
      const v1849 = stdlib.checkedBigNumberify('./index.rsh:132:13:decimal', stdlib.UInt_max, '0');
      const v1850 = stdlib.checkedBigNumberify('./index.rsh:133:13:decimal', stdlib.UInt_max, '0');
      const v1851 = v1745;
      const v1852 = v1747;
      const v1853 = v1746;
      const v1854 = v1744;
      const v1855 = v1747;
      const v1856 = v1746;
      const v1857 = v1743;
      const v1858 = stdlib.checkedBigNumberify('./index.rsh:129:25:decimal', stdlib.UInt_max, '0');
      const v1859 = stdlib.checkedBigNumberify('./index.rsh:131:13:decimal', stdlib.UInt_max, '0');
      const v1860 = stdlib.checkedBigNumberify('./index.rsh:130:13:decimal', stdlib.UInt_max, '0');
      const v1861 = v1746;
      const v1862 = v1748;
      const v1863 = v1741;
      const v1864 = v1843;
      const v1870 = v1834;
      const v1871 = stdlib.checkedBigNumberify('./index.rsh:55:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc6, ctc6, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1844, time: v1843, didSend: v138, from: v1842 } = txn2;
  ;
  const v1845 = stdlib.addressEq(v1740, v1842);
  stdlib.assert(v1845, {
    at: './index.rsh:109:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc7, await interact.ready(), {
    at: './index.rsh:110:25:application',
    fs: ['at ./index.rsh:110:25:application call to [unknown function] (defined at: ./index.rsh:110:25:function exp)', 'at ./index.rsh:110:25:application call to "liftedInteract" (defined at: ./index.rsh:110:25:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v1847 = stdlib.checkedBigNumberify('./index.rsh:137:13:decimal', stdlib.UInt_max, '0');
  let v1848 = v1742;
  let v1849 = stdlib.checkedBigNumberify('./index.rsh:132:13:decimal', stdlib.UInt_max, '0');
  let v1850 = stdlib.checkedBigNumberify('./index.rsh:133:13:decimal', stdlib.UInt_max, '0');
  let v1851 = v1745;
  let v1852 = v1747;
  let v1853 = v1746;
  let v1854 = v1744;
  let v1855 = v1747;
  let v1856 = v1746;
  let v1857 = v1743;
  let v1858 = stdlib.checkedBigNumberify('./index.rsh:129:25:decimal', stdlib.UInt_max, '0');
  let v1859 = stdlib.checkedBigNumberify('./index.rsh:131:13:decimal', stdlib.UInt_max, '0');
  let v1860 = stdlib.checkedBigNumberify('./index.rsh:130:13:decimal', stdlib.UInt_max, '0');
  let v1861 = v1746;
  let v1862 = v1748;
  let v1863 = v1741;
  let v1864 = v1843;
  let v1870 = v1834;
  let v1871 = stdlib.checkedBigNumberify('./index.rsh:55:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn3;
    switch (v2271[0]) {
      case 'AdminAPI_claimAdminFee0_194': {
        const v2274 = v2271[1];
        undefined /* setApiDetails */;
        ;
        const v2384 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v2385 = v2384[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v2389 = v2384[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v2390 = v2384[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v2391 = [v2385, v2389, v2390];
        const v2392 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v2391);
        ;
        const v2393 = v2392[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v2394 = v2393[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v2398 = v2393[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v2399 = v2393[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v2400 = [v2394, v2398, v2399];
        const v2401 = stdlib.Array_set(v2392, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v2400);
        ;
        const v2403 = stdlib.addressEq(v2270, v1740);
        stdlib.assert(v2403, {
          at: './index.rsh:268:28:application',
          fs: ['at ./index.rsh:267:21:application call to [unknown function] (defined at: ./index.rsh:267:21:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v2407 = stdlib.sub(v1871, v1847);
        ;
        const v2408 = true;
        await txn3.getOutput('AdminAPI_claimAdminFee', 'v2408', ctc12, v2408);
        const cv1847 = stdlib.checkedBigNumberify('./index.rsh:279:25:decimal', stdlib.UInt_max, '0');
        const cv1848 = v1848;
        const cv1849 = v1849;
        const cv1850 = v1850;
        const cv1851 = v1851;
        const cv1852 = v1852;
        const cv1853 = v1853;
        const cv1854 = v1854;
        const cv1855 = v1855;
        const cv1856 = v1856;
        const cv1857 = v1857;
        const cv1858 = v1858;
        const cv1859 = v1859;
        const cv1860 = v1860;
        const cv1861 = v1861;
        const cv1862 = v1862;
        const cv1863 = v1863;
        const cv1864 = v2272;
        const cv1870 = v2401;
        const cv1871 = v2407;
        
        v1847 = cv1847;
        v1848 = cv1848;
        v1849 = cv1849;
        v1850 = cv1850;
        v1851 = cv1851;
        v1852 = cv1852;
        v1853 = cv1853;
        v1854 = cv1854;
        v1855 = cv1855;
        v1856 = cv1856;
        v1857 = cv1857;
        v1858 = cv1858;
        v1859 = cv1859;
        v1860 = cv1860;
        v1861 = cv1861;
        v1862 = cv1862;
        v1863 = cv1863;
        v1864 = cv1864;
        v1870 = cv1870;
        v1871 = cv1871;
        
        continue;
        break;
        }
      case 'AdminAPI_setAdminFee0_194': {
        const v2819 = v2271[1];
        undefined /* setApiDetails */;
        ;
        const v2929 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v2930 = v2929[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v2934 = v2929[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v2935 = v2929[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v2936 = [v2930, v2934, v2935];
        const v2937 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v2936);
        ;
        const v2938 = v2937[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v2939 = v2938[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v2943 = v2938[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v2944 = v2938[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v2945 = [v2939, v2943, v2944];
        const v2946 = stdlib.Array_set(v2937, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v2945);
        ;
        const v2961 = v2819[stdlib.checkedBigNumberify('./index.rsh:239:17:spread', stdlib.UInt_max, '0')];
        const v2962 = v2819[stdlib.checkedBigNumberify('./index.rsh:239:17:spread', stdlib.UInt_max, '1')];
        const v2963 = stdlib.add(v2961, v2962);
        const v2964 = stdlib.eq(v2963, stdlib.checkedBigNumberify('./index.rsh:243:61:decimal', stdlib.UInt_max, '100'));
        stdlib.assert(v2964, {
          at: './index.rsh:243:28:application',
          fs: ['at ./index.rsh:242:50:application call to [unknown function] (defined at: ./index.rsh:242:50:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v2968 = stdlib.sub(v1871, v1847);
        ;
        const v2969 = true;
        await txn3.getOutput('AdminAPI_setAdminFee', 'v2969', ctc12, v2969);
        const cv1847 = stdlib.checkedBigNumberify('./index.rsh:254:25:decimal', stdlib.UInt_max, '0');
        const cv1848 = v2961;
        const cv1849 = v1849;
        const cv1850 = v1850;
        const cv1851 = v1851;
        const cv1852 = v1852;
        const cv1853 = v1853;
        const cv1854 = v1854;
        const cv1855 = v1855;
        const cv1856 = v1856;
        const cv1857 = v2962;
        const cv1858 = v1858;
        const cv1859 = v1859;
        const cv1860 = v1860;
        const cv1861 = v1861;
        const cv1862 = v1862;
        const cv1863 = v1863;
        const cv1864 = v2272;
        const cv1870 = v2946;
        const cv1871 = v2968;
        
        v1847 = cv1847;
        v1848 = cv1848;
        v1849 = cv1849;
        v1850 = cv1850;
        v1851 = cv1851;
        v1852 = cv1852;
        v1853 = cv1853;
        v1854 = cv1854;
        v1855 = cv1855;
        v1856 = cv1856;
        v1857 = cv1857;
        v1858 = cv1858;
        v1859 = cv1859;
        v1860 = cv1860;
        v1861 = cv1861;
        v1862 = cv1862;
        v1863 = cv1863;
        v1864 = cv1864;
        v1870 = cv1870;
        v1871 = cv1871;
        
        continue;
        break;
        }
      case 'AdminAPI_updatePrice0_194': {
        const v3364 = v2271[1];
        undefined /* setApiDetails */;
        ;
        const v3474 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v3475 = v3474[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v3479 = v3474[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v3480 = v3474[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v3481 = [v3475, v3479, v3480];
        const v3482 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v3481);
        ;
        const v3483 = v3482[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v3484 = v3483[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v3488 = v3483[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v3489 = v3483[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v3490 = [v3484, v3488, v3489];
        const v3491 = stdlib.Array_set(v3482, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v3490);
        ;
        const v3524 = v3364[stdlib.checkedBigNumberify('./index.rsh:170:17:spread', stdlib.UInt_max, '0')];
        const v3525 = stdlib.gt(v3524, stdlib.checkedBigNumberify('./index.rsh:174:37:decimal', stdlib.UInt_max, '0'));
        const v3526 = stdlib.addressEq(v2270, v1740);
        const v3527 = v3525 ? v3526 : false;
        stdlib.assert(v3527, {
          at: './index.rsh:174:28:application',
          fs: ['at ./index.rsh:173:28:application call to [unknown function] (defined at: ./index.rsh:173:28:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v3528 = true;
        await txn3.getOutput('AdminAPI_updatePrice', 'v3528', ctc12, v3528);
        let v3535;
        const v3536 = stdlib.eq(v1860, stdlib.checkedBigNumberify('./index.rsh:177:50:decimal', stdlib.UInt_max, '0'));
        if (v3536) {
          v3535 = v3524;
          }
        else {
          const v3537 = stdlib.div(v1859, v1860);
          const v3538 = stdlib.gt(v3537, v3524);
          if (v3538) {
            v3535 = v3524;
            }
          else {
            v3535 = v3537;
            }
          }
        const v3540 = stdlib.mul(v3535, v1860);
        let v3541;
        const v3542 = stdlib.gt(v1859, v3540);
        if (v3542) {
          const v3543 = stdlib.sub(v1859, v3540);
          v3541 = v3543;
          }
        else {
          v3541 = stdlib.checkedBigNumberify('./index.rsh:196:36:decimal', stdlib.UInt_max, '0');
          }
        let v3544;
        if (v3536) {
          v3544 = v3524;
          }
        else {
          const v3546 = stdlib.div(v1859, v1860);
          const v3547 = stdlib.gt(v3546, v3524);
          if (v3547) {
            v3544 = v3524;
            }
          else {
            v3544 = v3546;
            }
          }
        let v3549;
        if (v3542) {
          const v3551 = stdlib.sub(v1859, v3540);
          v3549 = v3551;
          }
        else {
          v3549 = stdlib.checkedBigNumberify('./index.rsh:196:36:decimal', stdlib.UInt_max, '0');
          }
        let v3552;
        const v3553 = stdlib.le(v3549, stdlib.checkedBigNumberify('./index.rsh:203:34:decimal', stdlib.UInt_max, '0'));
        if (v3553) {
          v3552 = v1852;
          }
        else {
          const v3554 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:206:56:decimal', stdlib.UInt_max, '0'));
          if (v3554) {
            v3552 = v1852;
            }
          else {
            const v3555 = stdlib.div(v3549, v1858);
            const v3556 = stdlib.gt(v1852, v3555);
            if (v3556) {
              v3552 = v1852;
              }
            else {
              v3552 = v3555;
              }
            }
          }
        const cv1847 = v1847;
        const cv1848 = v1848;
        const cv1849 = v3541;
        const cv1850 = v3540;
        const cv1851 = v1851;
        const cv1852 = v1852;
        const cv1853 = v3524;
        const cv1854 = v1854;
        const cv1855 = v3552;
        const cv1856 = v3544;
        const cv1857 = v1857;
        const cv1858 = v1858;
        const cv1859 = v1859;
        const cv1860 = v1860;
        const cv1861 = v3524;
        const cv1862 = v1862;
        const cv1863 = v1863;
        const cv1864 = v2272;
        const cv1870 = v3491;
        const cv1871 = v1871;
        
        v1847 = cv1847;
        v1848 = cv1848;
        v1849 = cv1849;
        v1850 = cv1850;
        v1851 = cv1851;
        v1852 = cv1852;
        v1853 = cv1853;
        v1854 = cv1854;
        v1855 = cv1855;
        v1856 = cv1856;
        v1857 = cv1857;
        v1858 = cv1858;
        v1859 = cv1859;
        v1860 = cv1860;
        v1861 = cv1861;
        v1862 = cv1862;
        v1863 = cv1863;
        v1864 = cv1864;
        v1870 = cv1870;
        v1871 = cv1871;
        
        continue;
        break;
        }
      case 'Claimant_burnReserve0_194': {
        const v3909 = v2271[1];
        undefined /* setApiDetails */;
        const v3947 = v3909[stdlib.checkedBigNumberify('./index.rsh:505:17:spread', stdlib.UInt_max, '0')];
        ;
        const v4019 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v4020 = v4019[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v4024 = v4019[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v4025 = v4019[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v4026 = [v4020, v4024, v4025];
        const v4027 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v4026);
        ;
        const v4028 = v4027[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v4029 = v4028[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v4030 = stdlib.add(v4029, v3947);
        const v4033 = v4028[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v4034 = v4028[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v4035 = [v4030, v4033, v4034];
        const v4036 = stdlib.Array_set(v4027, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v4035);
        ;
        const v4106 = stdlib.gt(v3947, stdlib.checkedBigNumberify('./index.rsh:512:41:decimal', stdlib.UInt_max, '0'));
        const v4107 = stdlib.mul(v3947, v1855);
        const v4109 = stdlib.mul(v4107, v1863);
        const v4110 = stdlib.div(v4109, stdlib.checkedBigNumberify('./index.rsh:513:98:decimal', stdlib.UInt_max, '100'));
        const v4111 = stdlib.mul(v4110, v1857);
        const v4112 = stdlib.div(v4111, stdlib.checkedBigNumberify('./index.rsh:513:120:decimal', stdlib.UInt_max, '100'));
        const v4113 = stdlib.sub(v4107, v4112);
        const v4114 = stdlib.sub(v1859, v4113);
        const v4115 = stdlib.mul(v1850, v1854);
        const v4116 = stdlib.ge(v4114, v4115);
        const v4117 = v4106 ? v4116 : false;
        const v4123 = stdlib.sub(v4107, v4110);
        const v4124 = stdlib.ge(v1871, v4123);
        const v4125 = v4117 ? v4124 : false;
        const v4137 = stdlib.mul(v4110, v1848);
        const v4138 = stdlib.div(v4137, stdlib.checkedBigNumberify('./index.rsh:515:186:decimal', stdlib.UInt_max, '100'));
        const v4139 = stdlib.add(v4112, v4138);
        const v4140 = stdlib.eq(v4110, v4139);
        const v4141 = v4125 ? v4140 : false;
        stdlib.assert(v4141, {
          at: './index.rsh:512:28:application',
          fs: ['at ./index.rsh:511:32:application call to [unknown function] (defined at: ./index.rsh:511:32:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4150 = stdlib.sub(v1871, v4123);
        ;
        const v4159 = stdlib.sub(v1858, v3947);
        const v4165 = stdlib.add(v1847, v4138);
        let v4166;
        const v4167 = stdlib.eq(v1860, stdlib.checkedBigNumberify('./index.rsh:521:43:decimal', stdlib.UInt_max, '0'));
        if (v4167) {
          v4166 = v1856;
          }
        else {
          const v4168 = stdlib.div(v4114, v1860);
          const v4169 = stdlib.gt(v4168, v1856);
          if (v4169) {
            v4166 = v1856;
            }
          else {
            v4166 = v4168;
            }
          }
        const v4171 = stdlib.mul(v1860, v4166);
        const v4172 = true;
        await txn3.getOutput('Claimant_burnReserve', 'v4172', ctc12, v4172);
        let v4179;
        const v4180 = stdlib.gt(v4114, v4171);
        if (v4180) {
          const v4181 = stdlib.sub(v4114, v4171);
          v4179 = v4181;
          }
        else {
          v4179 = stdlib.checkedBigNumberify('./index.rsh:540:40:decimal', stdlib.UInt_max, '0');
          }
        let v4182;
        if (v4167) {
          v4182 = v1856;
          }
        else {
          const v4184 = stdlib.div(v4114, v1860);
          const v4185 = stdlib.gt(v4184, v1856);
          if (v4185) {
            v4182 = v1856;
            }
          else {
            v4182 = v4184;
            }
          }
        let v4187;
        if (v4180) {
          const v4189 = stdlib.sub(v4114, v4171);
          v4187 = v4189;
          }
        else {
          v4187 = stdlib.checkedBigNumberify('./index.rsh:540:40:decimal', stdlib.UInt_max, '0');
          }
        let v4190;
        const v4191 = stdlib.le(v4187, stdlib.checkedBigNumberify('./index.rsh:544:38:decimal', stdlib.UInt_max, '0'));
        if (v4191) {
          v4190 = v1852;
          }
        else {
          const v4192 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:547:60:decimal', stdlib.UInt_max, '0'));
          if (v4192) {
            v4190 = v1852;
            }
          else {
            const v4193 = stdlib.div(v4187, v1858);
            const v4194 = stdlib.gt(v1852, v4193);
            if (v4194) {
              v4190 = v1852;
              }
            else {
              v4190 = v4193;
              }
            }
          }
        const cv1847 = v4165;
        const cv1848 = v1848;
        const cv1849 = v4179;
        const cv1850 = v4171;
        const cv1851 = v1851;
        const cv1852 = v1852;
        const cv1853 = v1853;
        const cv1854 = v1854;
        const cv1855 = v4190;
        const cv1856 = v4182;
        const cv1857 = v1857;
        const cv1858 = v4159;
        const cv1859 = v4114;
        const cv1860 = v1860;
        const cv1861 = v1861;
        const cv1862 = v1862;
        const cv1863 = v1863;
        const cv1864 = v2272;
        const cv1870 = v4036;
        const cv1871 = v4150;
        
        v1847 = cv1847;
        v1848 = cv1848;
        v1849 = cv1849;
        v1850 = cv1850;
        v1851 = cv1851;
        v1852 = cv1852;
        v1853 = cv1853;
        v1854 = cv1854;
        v1855 = cv1855;
        v1856 = cv1856;
        v1857 = cv1857;
        v1858 = cv1858;
        v1859 = cv1859;
        v1860 = cv1860;
        v1861 = cv1861;
        v1862 = cv1862;
        v1863 = cv1863;
        v1864 = cv1864;
        v1870 = cv1870;
        v1871 = cv1871;
        
        continue;
        break;
        }
      case 'Claimant_burnStable0_194': {
        const v4454 = v2271[1];
        undefined /* setApiDetails */;
        const v4503 = v4454[stdlib.checkedBigNumberify('./index.rsh:433:17:spread', stdlib.UInt_max, '0')];
        ;
        const v4564 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v4565 = v4564[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v4566 = stdlib.add(v4565, v4503);
        const v4569 = v4564[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v4570 = v4564[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v4571 = [v4566, v4569, v4570];
        const v4572 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v4571);
        ;
        const v4573 = v4572[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v4574 = v4573[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v4578 = v4573[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v4579 = v4573[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v4580 = [v4574, v4578, v4579];
        const v4581 = stdlib.Array_set(v4572, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v4580);
        ;
        const v4744 = stdlib.gt(v4503, stdlib.checkedBigNumberify('./index.rsh:439:41:decimal', stdlib.UInt_max, '0'));
        const v4746 = stdlib.mul(v4503, v1856);
        const v4748 = stdlib.mul(v4746, v1863);
        const v4749 = stdlib.div(v4748, stdlib.checkedBigNumberify('./index.rsh:440:98:decimal', stdlib.UInt_max, '100'));
        const v4750 = stdlib.sub(v4746, v4749);
        const v4751 = stdlib.ge(v1871, v4750);
        const v4752 = v4744 ? v4751 : false;
        const v4759 = stdlib.mul(v4749, v1857);
        const v4760 = stdlib.div(v4759, stdlib.checkedBigNumberify('./index.rsh:441:123:decimal', stdlib.UInt_max, '100'));
        const v4764 = stdlib.mul(v4749, v1848);
        const v4765 = stdlib.div(v4764, stdlib.checkedBigNumberify('./index.rsh:441:184:decimal', stdlib.UInt_max, '100'));
        const v4766 = stdlib.add(v4760, v4765);
        const v4767 = stdlib.eq(v4749, v4766);
        const v4768 = v4752 ? v4767 : false;
        stdlib.assert(v4768, {
          at: './index.rsh:439:28:application',
          fs: ['at ./index.rsh:438:32:application call to [unknown function] (defined at: ./index.rsh:438:32:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v4777 = stdlib.sub(v1871, v4750);
        ;
        const v4784 = stdlib.sub(v4746, v4760);
        const v4785 = stdlib.sub(v1859, v4784);
        const v4786 = stdlib.sub(v1860, v4503);
        const v4792 = stdlib.add(v1847, v4765);
        let v4793;
        const v4794 = stdlib.eq(v4786, stdlib.checkedBigNumberify('./index.rsh:447:39:decimal', stdlib.UInt_max, '0'));
        if (v4794) {
          v4793 = v1856;
          }
        else {
          const v4795 = stdlib.div(v4785, v4786);
          const v4796 = stdlib.gt(v4795, v1856);
          if (v4796) {
            v4793 = v1856;
            }
          else {
            v4793 = v4795;
            }
          }
        const v4798 = stdlib.mul(v4786, v4793);
        const v4799 = true;
        await txn3.getOutput('Claimant_burnStable', 'v4799', ctc12, v4799);
        let v4806;
        const v4807 = stdlib.gt(v4785, v4798);
        if (v4807) {
          const v4808 = stdlib.sub(v4785, v4798);
          v4806 = v4808;
          }
        else {
          v4806 = stdlib.checkedBigNumberify('./index.rsh:466:36:decimal', stdlib.UInt_max, '0');
          }
        let v4809;
        if (v4794) {
          v4809 = v1856;
          }
        else {
          const v4811 = stdlib.div(v4785, v4786);
          const v4812 = stdlib.gt(v4811, v1856);
          if (v4812) {
            v4809 = v1856;
            }
          else {
            v4809 = v4811;
            }
          }
        let v4814;
        if (v4807) {
          const v4816 = stdlib.sub(v4785, v4798);
          v4814 = v4816;
          }
        else {
          v4814 = stdlib.checkedBigNumberify('./index.rsh:466:36:decimal', stdlib.UInt_max, '0');
          }
        let v4817;
        const v4818 = stdlib.le(v4814, stdlib.checkedBigNumberify('./index.rsh:471:34:decimal', stdlib.UInt_max, '0'));
        if (v4818) {
          v4817 = v1852;
          }
        else {
          const v4819 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:474:56:decimal', stdlib.UInt_max, '0'));
          if (v4819) {
            v4817 = v1852;
            }
          else {
            const v4820 = stdlib.div(v4814, v1858);
            const v4821 = stdlib.gt(v1852, v4820);
            if (v4821) {
              v4817 = v1852;
              }
            else {
              v4817 = v4820;
              }
            }
          }
        const cv1847 = v4792;
        const cv1848 = v1848;
        const cv1849 = v4806;
        const cv1850 = v4798;
        const cv1851 = v1851;
        const cv1852 = v1852;
        const cv1853 = v1853;
        const cv1854 = v1854;
        const cv1855 = v4817;
        const cv1856 = v4809;
        const cv1857 = v1857;
        const cv1858 = v1858;
        const cv1859 = v4785;
        const cv1860 = v4786;
        const cv1861 = v1861;
        const cv1862 = v1862;
        const cv1863 = v1863;
        const cv1864 = v2272;
        const cv1870 = v4581;
        const cv1871 = v4777;
        
        v1847 = cv1847;
        v1848 = cv1848;
        v1849 = cv1849;
        v1850 = cv1850;
        v1851 = cv1851;
        v1852 = cv1852;
        v1853 = cv1853;
        v1854 = cv1854;
        v1855 = cv1855;
        v1856 = cv1856;
        v1857 = cv1857;
        v1858 = cv1858;
        v1859 = cv1859;
        v1860 = cv1860;
        v1861 = cv1861;
        v1862 = cv1862;
        v1863 = cv1863;
        v1864 = cv1864;
        v1870 = cv1870;
        v1871 = cv1871;
        
        continue;
        break;
        }
      case 'Claimant_mintReserve0_194': {
        const v4999 = v2271[1];
        undefined /* setApiDetails */;
        const v5059 = v4999[stdlib.checkedBigNumberify('./index.rsh:359:17:spread', stdlib.UInt_max, '0')];
        const v5060 = stdlib.mul(v5059, v1863);
        const v5061 = stdlib.div(v5060, stdlib.checkedBigNumberify('./index.rsh:364:64:decimal', stdlib.UInt_max, '100'));
        const v5062 = stdlib.add(v5059, v5061);
        const v5108 = stdlib.add(v1871, v5062);
        ;
        const v5109 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v5110 = v5109[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v5114 = v5109[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v5115 = v5109[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v5116 = [v5110, v5114, v5115];
        const v5117 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v5116);
        ;
        const v5118 = v5117[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v5119 = v5118[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v5123 = v5118[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v5124 = v5118[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v5125 = [v5119, v5123, v5124];
        const v5126 = stdlib.Array_set(v5117, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v5125);
        ;
        const v5371 = stdlib.gt(v5059, stdlib.checkedBigNumberify('./index.rsh:366:39:decimal', stdlib.UInt_max, '0'));
        const v5374 = stdlib.mul(v5061, v1857);
        const v5375 = stdlib.div(v5374, stdlib.checkedBigNumberify('./index.rsh:367:97:decimal', stdlib.UInt_max, '100'));
        const v5376 = stdlib.add(v5059, v5375);
        const v5377 = stdlib.add(v1859, v5376);
        const v5378 = stdlib.add(v1850, v5059);
        const v5379 = stdlib.mul(v5378, v1851);
        const v5380 = stdlib.le(v5377, v5379);
        const v5381 = stdlib.lt(v1858, v1862);
        const v5382 = v5380 ? true : v5381;
        const v5383 = v5371 ? v5382 : false;
        const v5384 = v5126[stdlib.checkedBigNumberify('./index.rsh:368:35:application', stdlib.UInt_max, '0')];
        const v5385 = v5384[stdlib.checkedBigNumberify('./index.rsh:368:35:application', stdlib.UInt_max, '0')];
        const v5386 = stdlib.div(v5059, v1855);
        const v5387 = stdlib.ge(v5385, v5386);
        const v5388 = v5383 ? v5387 : false;
        const v5397 = stdlib.mul(v5061, v1848);
        const v5398 = stdlib.div(v5397, stdlib.checkedBigNumberify('./index.rsh:369:148:decimal', stdlib.UInt_max, '100'));
        const v5399 = stdlib.add(v5375, v5398);
        const v5400 = stdlib.eq(v5061, v5399);
        const v5401 = v5388 ? v5400 : false;
        stdlib.assert(v5401, {
          at: './index.rsh:366:28:application',
          fs: ['at ./index.rsh:365:30:application call to [unknown function] (defined at: ./index.rsh:365:30:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v5408 = stdlib.sub(v5385, v5386);
        const v5411 = v5384[stdlib.checkedBigNumberify('./index.rsh:370:76:application', stdlib.UInt_max, '1')];
        const v5412 = v5384[stdlib.checkedBigNumberify('./index.rsh:370:76:application', stdlib.UInt_max, '2')];
        const v5413 = [v5408, v5411, v5412];
        const v5414 = stdlib.Array_set(v5126, stdlib.checkedBigNumberify('./index.rsh:370:76:application', stdlib.UInt_max, '0'), v5413);
        ;
        const v5422 = stdlib.add(v1858, v5386);
        const v5427 = stdlib.add(v1847, v5398);
        let v5428;
        const v5429 = stdlib.eq(v1860, stdlib.checkedBigNumberify('./index.rsh:375:39:decimal', stdlib.UInt_max, '0'));
        if (v5429) {
          v5428 = v1856;
          }
        else {
          const v5430 = stdlib.div(v5377, v1860);
          const v5431 = stdlib.gt(v5430, v1856);
          if (v5431) {
            v5428 = v1856;
            }
          else {
            v5428 = v5430;
            }
          }
        const v5433 = stdlib.mul(v1860, v5428);
        const v5434 = true;
        await txn3.getOutput('Claimant_mintReserve', 'v5434', ctc12, v5434);
        let v5441;
        const v5442 = stdlib.gt(v5377, v5433);
        if (v5442) {
          const v5443 = stdlib.sub(v5377, v5433);
          v5441 = v5443;
          }
        else {
          v5441 = stdlib.checkedBigNumberify('./index.rsh:394:36:decimal', stdlib.UInt_max, '0');
          }
        let v5444;
        if (v5429) {
          v5444 = v1856;
          }
        else {
          const v5446 = stdlib.div(v5377, v1860);
          const v5447 = stdlib.gt(v5446, v1856);
          if (v5447) {
            v5444 = v1856;
            }
          else {
            v5444 = v5446;
            }
          }
        let v5449;
        if (v5442) {
          const v5451 = stdlib.sub(v5377, v5433);
          v5449 = v5451;
          }
        else {
          v5449 = stdlib.checkedBigNumberify('./index.rsh:394:36:decimal', stdlib.UInt_max, '0');
          }
        let v5452;
        const v5453 = stdlib.le(v5449, stdlib.checkedBigNumberify('./index.rsh:399:34:decimal', stdlib.UInt_max, '0'));
        if (v5453) {
          v5452 = v1852;
          }
        else {
          const v5454 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:402:56:decimal', stdlib.UInt_max, '0'));
          if (v5454) {
            v5452 = v1852;
            }
          else {
            const v5455 = stdlib.div(v5449, v1858);
            const v5456 = stdlib.gt(v1852, v5455);
            if (v5456) {
              v5452 = v1852;
              }
            else {
              v5452 = v5455;
              }
            }
          }
        const cv1847 = v5427;
        const cv1848 = v1848;
        const cv1849 = v5441;
        const cv1850 = v5433;
        const cv1851 = v1851;
        const cv1852 = v1852;
        const cv1853 = v1853;
        const cv1854 = v1854;
        const cv1855 = v5452;
        const cv1856 = v5444;
        const cv1857 = v1857;
        const cv1858 = v5422;
        const cv1859 = v5377;
        const cv1860 = v1860;
        const cv1861 = v1861;
        const cv1862 = v1862;
        const cv1863 = v1863;
        const cv1864 = v2272;
        const cv1870 = v5414;
        const cv1871 = v5108;
        
        v1847 = cv1847;
        v1848 = cv1848;
        v1849 = cv1849;
        v1850 = cv1850;
        v1851 = cv1851;
        v1852 = cv1852;
        v1853 = cv1853;
        v1854 = cv1854;
        v1855 = cv1855;
        v1856 = cv1856;
        v1857 = cv1857;
        v1858 = cv1858;
        v1859 = cv1859;
        v1860 = cv1860;
        v1861 = cv1861;
        v1862 = cv1862;
        v1863 = cv1863;
        v1864 = cv1864;
        v1870 = cv1870;
        v1871 = cv1871;
        
        continue;
        break;
        }
      case 'Claimant_mintStable0_194': {
        const v5544 = v2271[1];
        undefined /* setApiDetails */;
        const v5618 = v5544[stdlib.checkedBigNumberify('./index.rsh:289:17:spread', stdlib.UInt_max, '0')];
        const v5619 = stdlib.mul(v5618, v1863);
        const v5620 = stdlib.div(v5619, stdlib.checkedBigNumberify('./index.rsh:294:64:decimal', stdlib.UInt_max, '100'));
        const v5621 = stdlib.add(v5618, v5620);
        const v5653 = stdlib.add(v1871, v5621);
        ;
        const v5654 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v5655 = v5654[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v5659 = v5654[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v5660 = v5654[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v5661 = [v5655, v5659, v5660];
        const v5662 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v5661);
        ;
        const v5663 = v5662[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v5664 = v5663[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
        const v5668 = v5663[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
        const v5669 = v5663[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
        const v5670 = [v5664, v5668, v5669];
        const v5671 = stdlib.Array_set(v5662, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v5670);
        ;
        const v6006 = stdlib.gt(v5618, stdlib.checkedBigNumberify('./index.rsh:296:39:decimal', stdlib.UInt_max, '0'));
        const v6009 = stdlib.mul(v5620, v1857);
        const v6010 = stdlib.div(v6009, stdlib.checkedBigNumberify('./index.rsh:297:96:decimal', stdlib.UInt_max, '100'));
        const v6011 = stdlib.add(v5618, v6010);
        const v6012 = stdlib.add(v1859, v6011);
        const v6013 = stdlib.mul(v1850, v1854);
        const v6014 = stdlib.ge(v6012, v6013);
        const v6015 = v6006 ? v6014 : false;
        const v6016 = v5671[stdlib.checkedBigNumberify('./index.rsh:298:35:application', stdlib.UInt_max, '1')];
        const v6017 = v6016[stdlib.checkedBigNumberify('./index.rsh:298:35:application', stdlib.UInt_max, '0')];
        const v6018 = stdlib.div(v5618, v1856);
        const v6019 = stdlib.ge(v6017, v6018);
        const v6020 = v6015 ? v6019 : false;
        const v6029 = stdlib.mul(v5620, v1848);
        const v6030 = stdlib.div(v6029, stdlib.checkedBigNumberify('./index.rsh:299:148:decimal', stdlib.UInt_max, '100'));
        const v6031 = stdlib.add(v6010, v6030);
        const v6032 = stdlib.eq(v5620, v6031);
        const v6033 = v6020 ? v6032 : false;
        stdlib.assert(v6033, {
          at: './index.rsh:296:28:application',
          fs: ['at ./index.rsh:295:30:application call to [unknown function] (defined at: ./index.rsh:295:30:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v6040 = stdlib.sub(v6017, v6018);
        const v6043 = v6016[stdlib.checkedBigNumberify('./index.rsh:300:75:application', stdlib.UInt_max, '1')];
        const v6044 = v6016[stdlib.checkedBigNumberify('./index.rsh:300:75:application', stdlib.UInt_max, '2')];
        const v6045 = [v6040, v6043, v6044];
        const v6046 = stdlib.Array_set(v5671, stdlib.checkedBigNumberify('./index.rsh:300:75:application', stdlib.UInt_max, '1'), v6045);
        ;
        const v6054 = stdlib.add(v1860, v6018);
        const v6059 = stdlib.add(v1847, v6030);
        let v6060;
        const v6061 = stdlib.div(v6012, v6054);
        const v6062 = stdlib.gt(v6061, v1856);
        if (v6062) {
          v6060 = v1856;
          }
        else {
          v6060 = v6061;
          }
        const v6064 = stdlib.mul(v6054, v6060);
        const v6065 = true;
        await txn3.getOutput('Claimant_mintStable', 'v6065', ctc12, v6065);
        let v6072;
        const v6073 = stdlib.gt(v6012, v6064);
        if (v6073) {
          const v6074 = stdlib.sub(v6012, v6064);
          v6072 = v6074;
          }
        else {
          v6072 = stdlib.checkedBigNumberify('./index.rsh:318:36:decimal', stdlib.UInt_max, '0');
          }
        let v6075;
        if (v6062) {
          v6075 = v1856;
          }
        else {
          v6075 = v6061;
          }
        let v6079;
        if (v6073) {
          const v6081 = stdlib.sub(v6012, v6064);
          v6079 = v6081;
          }
        else {
          v6079 = stdlib.checkedBigNumberify('./index.rsh:318:36:decimal', stdlib.UInt_max, '0');
          }
        let v6082;
        const v6083 = stdlib.le(v6079, stdlib.checkedBigNumberify('./index.rsh:323:34:decimal', stdlib.UInt_max, '0'));
        if (v6083) {
          v6082 = v1852;
          }
        else {
          const v6084 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:326:56:decimal', stdlib.UInt_max, '0'));
          if (v6084) {
            v6082 = v1852;
            }
          else {
            const v6085 = stdlib.div(v6079, v1858);
            const v6086 = stdlib.gt(v1852, v6085);
            if (v6086) {
              v6082 = v1852;
              }
            else {
              v6082 = v6085;
              }
            }
          }
        const cv1847 = v6059;
        const cv1848 = v1848;
        const cv1849 = v6072;
        const cv1850 = v6064;
        const cv1851 = v1851;
        const cv1852 = v1852;
        const cv1853 = v1853;
        const cv1854 = v1854;
        const cv1855 = v6082;
        const cv1856 = v6075;
        const cv1857 = v1857;
        const cv1858 = v1858;
        const cv1859 = v6012;
        const cv1860 = v6054;
        const cv1861 = v1861;
        const cv1862 = v1862;
        const cv1863 = v1863;
        const cv1864 = v2272;
        const cv1870 = v6046;
        const cv1871 = v5653;
        
        v1847 = cv1847;
        v1848 = cv1848;
        v1849 = cv1849;
        v1850 = cv1850;
        v1851 = cv1851;
        v1852 = cv1852;
        v1853 = cv1853;
        v1854 = cv1854;
        v1855 = cv1855;
        v1856 = cv1856;
        v1857 = cv1857;
        v1858 = cv1858;
        v1859 = cv1859;
        v1860 = cv1860;
        v1861 = cv1861;
        v1862 = cv1862;
        v1863 = cv1863;
        v1864 = cv1864;
        v1870 = cv1870;
        v1871 = cv1871;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _AdminAPI_claimAdminFee4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_claimAdminFee4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_claimAdminFee4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_194: ctc6,
    AdminAPI_setAdminFee0_194: ctc7,
    AdminAPI_updatePrice0_194: ctc8,
    Claimant_burnReserve0_194: ctc8,
    Claimant_burnStable0_194: ctc8,
    Claimant_mintReserve0_194: ctc8,
    Claimant_mintStable0_194: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v1920 = ctc.selfAddress();
  const v1922 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:265:20:application call to [unknown function] (defined at: ./index.rsh:265:20:function exp)', 'at ./index.rsh:129:23:application call to "runAdminAPI_claimAdminFee0_194" (defined at: ./index.rsh:264:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: 'in',
    who: 'AdminAPI_claimAdminFee'
    });
  const v1923 = stdlib.addressEq(v1920, v1740);
  stdlib.assert(v1923, {
    at: './index.rsh:265:29:application',
    fs: ['at ./index.rsh:265:20:application call to [unknown function] (defined at: ./index.rsh:265:20:function exp)', 'at ./index.rsh:265:20:application call to [unknown function] (defined at: ./index.rsh:265:20:function exp)', 'at ./index.rsh:129:23:application call to "runAdminAPI_claimAdminFee0_194" (defined at: ./index.rsh:264:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: null,
    who: 'AdminAPI_claimAdminFee'
    });
  const v1926 = ['AdminAPI_claimAdminFee0_194', v1922];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871, v1926],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:266:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:266:28:decimal', stdlib.UInt_max, '0'), v1806], [stdlib.checkedBigNumberify('./index.rsh:266:50:decimal', stdlib.UInt_max, '0'), v1770]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
      
      switch (v2271[0]) {
        case 'AdminAPI_claimAdminFee0_194': {
          const v2274 = v2271[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_claimAdminFee"
            });
          ;
          const v2384 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v2385 = v2384[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v2389 = v2384[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v2390 = v2384[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v2391 = [v2385, v2389, v2390];
          const v2392 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v2391);
          ;
          const v2393 = v2392[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v2394 = v2393[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v2398 = v2393[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v2399 = v2393[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v2400 = [v2394, v2398, v2399];
          const v2401 = stdlib.Array_set(v2392, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v2400);
          ;
          const v2407 = stdlib.sub(v1871, v1847);
          sim_r.txns.push({
            kind: 'from',
            to: v1740,
            tok: undefined /* Nothing */
            });
          const v2408 = true;
          const v2409 = await txn1.getOutput('AdminAPI_claimAdminFee', 'v2408', ctc3, v2408);
          
          const v15389 = stdlib.checkedBigNumberify('./index.rsh:279:25:decimal', stdlib.UInt_max, '0');
          const v15390 = v1848;
          const v15391 = v1849;
          const v15392 = v1850;
          const v15393 = v1851;
          const v15394 = v1852;
          const v15395 = v1853;
          const v15396 = v1854;
          const v15397 = v1855;
          const v15398 = v1856;
          const v15399 = v1857;
          const v15400 = v1858;
          const v15401 = v1859;
          const v15402 = v1860;
          const v15403 = v1861;
          const v15404 = v1862;
          const v15405 = v1863;
          const v15407 = v2401;
          const v15408 = v2407;
          sim_r.isHalt = false;
          
          break;
          }
        case 'AdminAPI_setAdminFee0_194': {
          const v2819 = v2271[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_194': {
          const v3364 = v2271[1];
          
          break;
          }
        case 'Claimant_burnReserve0_194': {
          const v3909 = v2271[1];
          
          break;
          }
        case 'Claimant_burnStable0_194': {
          const v4454 = v2271[1];
          
          break;
          }
        case 'Claimant_mintReserve0_194': {
          const v4999 = v2271[1];
          
          break;
          }
        case 'Claimant_mintStable0_194': {
          const v5544 = v2271[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
  switch (v2271[0]) {
    case 'AdminAPI_claimAdminFee0_194': {
      const v2274 = v2271[1];
      undefined /* setApiDetails */;
      ;
      const v2384 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v2385 = v2384[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v2389 = v2384[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v2390 = v2384[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v2391 = [v2385, v2389, v2390];
      const v2392 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v2391);
      ;
      const v2393 = v2392[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v2394 = v2393[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v2398 = v2393[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v2399 = v2393[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v2400 = [v2394, v2398, v2399];
      const v2401 = stdlib.Array_set(v2392, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v2400);
      ;
      const v2403 = stdlib.addressEq(v2270, v1740);
      stdlib.assert(v2403, {
        at: './index.rsh:268:28:application',
        fs: ['at ./index.rsh:267:21:application call to [unknown function] (defined at: ./index.rsh:267:21:function exp)'],
        msg: null,
        who: 'AdminAPI_claimAdminFee'
        });
      const v2407 = stdlib.sub(v1871, v1847);
      ;
      const v2408 = true;
      const v2409 = await txn1.getOutput('AdminAPI_claimAdminFee', 'v2408', ctc3, v2408);
      if (v979) {
        stdlib.protect(ctc10, await interact.out(v2274, v2409), {
          at: './index.rsh:264:18:application',
          fs: ['at ./index.rsh:264:18:application call to [unknown function] (defined at: ./index.rsh:264:18:function exp)', 'at ./index.rsh:270:22:application call to "k" (defined at: ./index.rsh:267:21:function exp)', 'at ./index.rsh:267:21:application call to [unknown function] (defined at: ./index.rsh:267:21:function exp)'],
          msg: 'out',
          who: 'AdminAPI_claimAdminFee'
          });
        }
      else {
        }
      
      const v15389 = stdlib.checkedBigNumberify('./index.rsh:279:25:decimal', stdlib.UInt_max, '0');
      const v15390 = v1848;
      const v15391 = v1849;
      const v15392 = v1850;
      const v15393 = v1851;
      const v15394 = v1852;
      const v15395 = v1853;
      const v15396 = v1854;
      const v15397 = v1855;
      const v15398 = v1856;
      const v15399 = v1857;
      const v15400 = v1858;
      const v15401 = v1859;
      const v15402 = v1860;
      const v15403 = v1861;
      const v15404 = v1862;
      const v15405 = v1863;
      const v15407 = v2401;
      const v15408 = v2407;
      return;
      
      break;
      }
    case 'AdminAPI_setAdminFee0_194': {
      const v2819 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_194': {
      const v3364 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_194': {
      const v3909 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_194': {
      const v4454 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_194': {
      const v4999 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_194': {
      const v5544 = v2271[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AdminAPI_setAdminFee4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_setAdminFee4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_setAdminFee4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_194: ctc7,
    AdminAPI_setAdminFee0_194: ctc6,
    AdminAPI_updatePrice0_194: ctc8,
    Claimant_burnReserve0_194: ctc8,
    Claimant_burnStable0_194: ctc8,
    Claimant_mintReserve0_194: ctc8,
    Claimant_mintStable0_194: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v1907 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:240:47:application call to [unknown function] (defined at: ./index.rsh:240:47:function exp)', 'at ./index.rsh:129:23:application call to "runAdminAPI_setAdminFee0_194" (defined at: ./index.rsh:239:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: 'in',
    who: 'AdminAPI_setAdminFee'
    });
  const v1908 = v1907[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1909 = v1907[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1912 = stdlib.add(v1908, v1909);
  const v1913 = stdlib.eq(v1912, stdlib.checkedBigNumberify('./index.rsh:240:89:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v1913, {
    at: './index.rsh:240:56:application',
    fs: ['at ./index.rsh:240:47:application call to [unknown function] (defined at: ./index.rsh:240:47:function exp)', 'at ./index.rsh:240:47:application call to [unknown function] (defined at: ./index.rsh:240:47:function exp)', 'at ./index.rsh:129:23:application call to "runAdminAPI_setAdminFee0_194" (defined at: ./index.rsh:239:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: null,
    who: 'AdminAPI_setAdminFee'
    });
  const v1918 = ['AdminAPI_setAdminFee0_194', v1907];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871, v1918],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:241:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:241:32:decimal', stdlib.UInt_max, '0'), v1806], [stdlib.checkedBigNumberify('./index.rsh:241:54:decimal', stdlib.UInt_max, '0'), v1770]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
      
      switch (v2271[0]) {
        case 'AdminAPI_claimAdminFee0_194': {
          const v2274 = v2271[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_194': {
          const v2819 = v2271[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_setAdminFee"
            });
          ;
          const v2929 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v2930 = v2929[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v2934 = v2929[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v2935 = v2929[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v2936 = [v2930, v2934, v2935];
          const v2937 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v2936);
          ;
          const v2938 = v2937[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v2939 = v2938[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v2943 = v2938[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v2944 = v2938[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v2945 = [v2939, v2943, v2944];
          const v2946 = stdlib.Array_set(v2937, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v2945);
          ;
          const v2961 = v2819[stdlib.checkedBigNumberify('./index.rsh:239:17:spread', stdlib.UInt_max, '0')];
          const v2962 = v2819[stdlib.checkedBigNumberify('./index.rsh:239:17:spread', stdlib.UInt_max, '1')];
          const v2968 = stdlib.sub(v1871, v1847);
          sim_r.txns.push({
            kind: 'from',
            to: v1740,
            tok: undefined /* Nothing */
            });
          const v2969 = true;
          const v2970 = await txn1.getOutput('AdminAPI_setAdminFee', 'v2969', ctc3, v2969);
          
          const v15549 = stdlib.checkedBigNumberify('./index.rsh:254:25:decimal', stdlib.UInt_max, '0');
          const v15550 = v2961;
          const v15551 = v1849;
          const v15552 = v1850;
          const v15553 = v1851;
          const v15554 = v1852;
          const v15555 = v1853;
          const v15556 = v1854;
          const v15557 = v1855;
          const v15558 = v1856;
          const v15559 = v2962;
          const v15560 = v1858;
          const v15561 = v1859;
          const v15562 = v1860;
          const v15563 = v1861;
          const v15564 = v1862;
          const v15565 = v1863;
          const v15567 = v2946;
          const v15568 = v2968;
          sim_r.isHalt = false;
          
          break;
          }
        case 'AdminAPI_updatePrice0_194': {
          const v3364 = v2271[1];
          
          break;
          }
        case 'Claimant_burnReserve0_194': {
          const v3909 = v2271[1];
          
          break;
          }
        case 'Claimant_burnStable0_194': {
          const v4454 = v2271[1];
          
          break;
          }
        case 'Claimant_mintReserve0_194': {
          const v4999 = v2271[1];
          
          break;
          }
        case 'Claimant_mintStable0_194': {
          const v5544 = v2271[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
  switch (v2271[0]) {
    case 'AdminAPI_claimAdminFee0_194': {
      const v2274 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_194': {
      const v2819 = v2271[1];
      undefined /* setApiDetails */;
      ;
      const v2929 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v2930 = v2929[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v2934 = v2929[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v2935 = v2929[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v2936 = [v2930, v2934, v2935];
      const v2937 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v2936);
      ;
      const v2938 = v2937[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v2939 = v2938[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v2943 = v2938[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v2944 = v2938[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v2945 = [v2939, v2943, v2944];
      const v2946 = stdlib.Array_set(v2937, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v2945);
      ;
      const v2961 = v2819[stdlib.checkedBigNumberify('./index.rsh:239:17:spread', stdlib.UInt_max, '0')];
      const v2962 = v2819[stdlib.checkedBigNumberify('./index.rsh:239:17:spread', stdlib.UInt_max, '1')];
      const v2963 = stdlib.add(v2961, v2962);
      const v2964 = stdlib.eq(v2963, stdlib.checkedBigNumberify('./index.rsh:243:61:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v2964, {
        at: './index.rsh:243:28:application',
        fs: ['at ./index.rsh:242:50:application call to [unknown function] (defined at: ./index.rsh:242:50:function exp)'],
        msg: null,
        who: 'AdminAPI_setAdminFee'
        });
      const v2968 = stdlib.sub(v1871, v1847);
      ;
      const v2969 = true;
      const v2970 = await txn1.getOutput('AdminAPI_setAdminFee', 'v2969', ctc3, v2969);
      if (v979) {
        stdlib.protect(ctc10, await interact.out(v2819, v2970), {
          at: './index.rsh:239:18:application',
          fs: ['at ./index.rsh:239:18:application call to [unknown function] (defined at: ./index.rsh:239:18:function exp)', 'at ./index.rsh:245:22:application call to "k" (defined at: ./index.rsh:242:50:function exp)', 'at ./index.rsh:242:50:application call to [unknown function] (defined at: ./index.rsh:242:50:function exp)'],
          msg: 'out',
          who: 'AdminAPI_setAdminFee'
          });
        }
      else {
        }
      
      const v15549 = stdlib.checkedBigNumberify('./index.rsh:254:25:decimal', stdlib.UInt_max, '0');
      const v15550 = v2961;
      const v15551 = v1849;
      const v15552 = v1850;
      const v15553 = v1851;
      const v15554 = v1852;
      const v15555 = v1853;
      const v15556 = v1854;
      const v15557 = v1855;
      const v15558 = v1856;
      const v15559 = v2962;
      const v15560 = v1858;
      const v15561 = v1859;
      const v15562 = v1860;
      const v15563 = v1861;
      const v15564 = v1862;
      const v15565 = v1863;
      const v15567 = v2946;
      const v15568 = v2968;
      return;
      
      break;
      }
    case 'AdminAPI_updatePrice0_194': {
      const v3364 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_194': {
      const v3909 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_194': {
      const v4454 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_194': {
      const v4999 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_194': {
      const v5544 = v2271[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AdminAPI_updatePrice4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_updatePrice4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_updatePrice4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_194: ctc7,
    AdminAPI_setAdminFee0_194: ctc8,
    AdminAPI_updatePrice0_194: ctc6,
    Claimant_burnReserve0_194: ctc6,
    Claimant_burnStable0_194: ctc6,
    Claimant_mintReserve0_194: ctc6,
    Claimant_mintStable0_194: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v1892 = ctc.selfAddress();
  const v1894 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:171:25:application call to [unknown function] (defined at: ./index.rsh:171:25:function exp)', 'at ./index.rsh:129:23:application call to "runAdminAPI_updatePrice0_194" (defined at: ./index.rsh:170:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: 'in',
    who: 'AdminAPI_updatePrice'
    });
  const v1895 = v1894[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1897 = stdlib.gt(v1895, stdlib.checkedBigNumberify('./index.rsh:171:43:decimal', stdlib.UInt_max, '0'));
  const v1898 = stdlib.addressEq(v1892, v1740);
  const v1899 = v1897 ? v1898 : false;
  stdlib.assert(v1899, {
    at: './index.rsh:171:34:application',
    fs: ['at ./index.rsh:171:25:application call to [unknown function] (defined at: ./index.rsh:171:25:function exp)', 'at ./index.rsh:171:25:application call to [unknown function] (defined at: ./index.rsh:171:25:function exp)', 'at ./index.rsh:129:23:application call to "runAdminAPI_updatePrice0_194" (defined at: ./index.rsh:170:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: null,
    who: 'AdminAPI_updatePrice'
    });
  const v1903 = ['AdminAPI_updatePrice0_194', v1894];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871, v1903],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:172:25:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:172:29:decimal', stdlib.UInt_max, '0'), v1806], [stdlib.checkedBigNumberify('./index.rsh:172:51:decimal', stdlib.UInt_max, '0'), v1770]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
      
      switch (v2271[0]) {
        case 'AdminAPI_claimAdminFee0_194': {
          const v2274 = v2271[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_194': {
          const v2819 = v2271[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_194': {
          const v3364 = v2271[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminAPI_updatePrice"
            });
          ;
          const v3474 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v3475 = v3474[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v3479 = v3474[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v3480 = v3474[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v3481 = [v3475, v3479, v3480];
          const v3482 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v3481);
          ;
          const v3483 = v3482[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v3484 = v3483[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v3488 = v3483[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v3489 = v3483[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v3490 = [v3484, v3488, v3489];
          const v3491 = stdlib.Array_set(v3482, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v3490);
          ;
          const v3524 = v3364[stdlib.checkedBigNumberify('./index.rsh:170:17:spread', stdlib.UInt_max, '0')];
          const v3528 = true;
          const v3529 = await txn1.getOutput('AdminAPI_updatePrice', 'v3528', ctc3, v3528);
          
          let v3535;
          const v3536 = stdlib.eq(v1860, stdlib.checkedBigNumberify('./index.rsh:177:50:decimal', stdlib.UInt_max, '0'));
          if (v3536) {
            v3535 = v3524;
            }
          else {
            const v3537 = stdlib.div(v1859, v1860);
            const v3538 = stdlib.gt(v3537, v3524);
            if (v3538) {
              v3535 = v3524;
              }
            else {
              v3535 = v3537;
              }
            }
          const v3540 = stdlib.mul(v3535, v1860);
          let v3541;
          const v3542 = stdlib.gt(v1859, v3540);
          if (v3542) {
            const v3543 = stdlib.sub(v1859, v3540);
            v3541 = v3543;
            }
          else {
            v3541 = stdlib.checkedBigNumberify('./index.rsh:196:36:decimal', stdlib.UInt_max, '0');
            }
          let v3544;
          if (v3536) {
            v3544 = v3524;
            }
          else {
            const v3546 = stdlib.div(v1859, v1860);
            const v3547 = stdlib.gt(v3546, v3524);
            if (v3547) {
              v3544 = v3524;
              }
            else {
              v3544 = v3546;
              }
            }
          let v3549;
          if (v3542) {
            const v3551 = stdlib.sub(v1859, v3540);
            v3549 = v3551;
            }
          else {
            v3549 = stdlib.checkedBigNumberify('./index.rsh:196:36:decimal', stdlib.UInt_max, '0');
            }
          let v3552;
          const v3553 = stdlib.le(v3549, stdlib.checkedBigNumberify('./index.rsh:203:34:decimal', stdlib.UInt_max, '0'));
          if (v3553) {
            v3552 = v1852;
            }
          else {
            const v3554 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:206:56:decimal', stdlib.UInt_max, '0'));
            if (v3554) {
              v3552 = v1852;
              }
            else {
              const v3555 = stdlib.div(v3549, v1858);
              const v3556 = stdlib.gt(v1852, v3555);
              if (v3556) {
                v3552 = v1852;
                }
              else {
                v3552 = v3555;
                }
              }
            }
          const v15709 = v1847;
          const v15710 = v1848;
          const v15711 = v3541;
          const v15712 = v3540;
          const v15713 = v1851;
          const v15714 = v1852;
          const v15715 = v3524;
          const v15716 = v1854;
          const v15717 = v3552;
          const v15718 = v3544;
          const v15719 = v1857;
          const v15720 = v1858;
          const v15721 = v1859;
          const v15722 = v1860;
          const v15723 = v3524;
          const v15724 = v1862;
          const v15725 = v1863;
          const v15727 = v3491;
          const v15728 = v1871;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_burnReserve0_194': {
          const v3909 = v2271[1];
          
          break;
          }
        case 'Claimant_burnStable0_194': {
          const v4454 = v2271[1];
          
          break;
          }
        case 'Claimant_mintReserve0_194': {
          const v4999 = v2271[1];
          
          break;
          }
        case 'Claimant_mintStable0_194': {
          const v5544 = v2271[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
  switch (v2271[0]) {
    case 'AdminAPI_claimAdminFee0_194': {
      const v2274 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_194': {
      const v2819 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_194': {
      const v3364 = v2271[1];
      undefined /* setApiDetails */;
      ;
      const v3474 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v3475 = v3474[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v3479 = v3474[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v3480 = v3474[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v3481 = [v3475, v3479, v3480];
      const v3482 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v3481);
      ;
      const v3483 = v3482[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v3484 = v3483[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v3488 = v3483[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v3489 = v3483[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v3490 = [v3484, v3488, v3489];
      const v3491 = stdlib.Array_set(v3482, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v3490);
      ;
      const v3524 = v3364[stdlib.checkedBigNumberify('./index.rsh:170:17:spread', stdlib.UInt_max, '0')];
      const v3525 = stdlib.gt(v3524, stdlib.checkedBigNumberify('./index.rsh:174:37:decimal', stdlib.UInt_max, '0'));
      const v3526 = stdlib.addressEq(v2270, v1740);
      const v3527 = v3525 ? v3526 : false;
      stdlib.assert(v3527, {
        at: './index.rsh:174:28:application',
        fs: ['at ./index.rsh:173:28:application call to [unknown function] (defined at: ./index.rsh:173:28:function exp)'],
        msg: null,
        who: 'AdminAPI_updatePrice'
        });
      const v3528 = true;
      const v3529 = await txn1.getOutput('AdminAPI_updatePrice', 'v3528', ctc3, v3528);
      if (v979) {
        stdlib.protect(ctc10, await interact.out(v3364, v3529), {
          at: './index.rsh:170:18:application',
          fs: ['at ./index.rsh:170:18:application call to [unknown function] (defined at: ./index.rsh:170:18:function exp)', 'at ./index.rsh:175:22:application call to "k" (defined at: ./index.rsh:173:28:function exp)', 'at ./index.rsh:173:28:application call to [unknown function] (defined at: ./index.rsh:173:28:function exp)'],
          msg: 'out',
          who: 'AdminAPI_updatePrice'
          });
        }
      else {
        }
      
      let v3535;
      const v3536 = stdlib.eq(v1860, stdlib.checkedBigNumberify('./index.rsh:177:50:decimal', stdlib.UInt_max, '0'));
      if (v3536) {
        v3535 = v3524;
        }
      else {
        const v3537 = stdlib.div(v1859, v1860);
        const v3538 = stdlib.gt(v3537, v3524);
        if (v3538) {
          v3535 = v3524;
          }
        else {
          v3535 = v3537;
          }
        }
      const v3540 = stdlib.mul(v3535, v1860);
      let v3541;
      const v3542 = stdlib.gt(v1859, v3540);
      if (v3542) {
        const v3543 = stdlib.sub(v1859, v3540);
        v3541 = v3543;
        }
      else {
        v3541 = stdlib.checkedBigNumberify('./index.rsh:196:36:decimal', stdlib.UInt_max, '0');
        }
      let v3544;
      if (v3536) {
        v3544 = v3524;
        }
      else {
        const v3546 = stdlib.div(v1859, v1860);
        const v3547 = stdlib.gt(v3546, v3524);
        if (v3547) {
          v3544 = v3524;
          }
        else {
          v3544 = v3546;
          }
        }
      let v3549;
      if (v3542) {
        const v3551 = stdlib.sub(v1859, v3540);
        v3549 = v3551;
        }
      else {
        v3549 = stdlib.checkedBigNumberify('./index.rsh:196:36:decimal', stdlib.UInt_max, '0');
        }
      let v3552;
      const v3553 = stdlib.le(v3549, stdlib.checkedBigNumberify('./index.rsh:203:34:decimal', stdlib.UInt_max, '0'));
      if (v3553) {
        v3552 = v1852;
        }
      else {
        const v3554 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:206:56:decimal', stdlib.UInt_max, '0'));
        if (v3554) {
          v3552 = v1852;
          }
        else {
          const v3555 = stdlib.div(v3549, v1858);
          const v3556 = stdlib.gt(v1852, v3555);
          if (v3556) {
            v3552 = v1852;
            }
          else {
            v3552 = v3555;
            }
          }
        }
      const v15709 = v1847;
      const v15710 = v1848;
      const v15711 = v3541;
      const v15712 = v3540;
      const v15713 = v1851;
      const v15714 = v1852;
      const v15715 = v3524;
      const v15716 = v1854;
      const v15717 = v3552;
      const v15718 = v3544;
      const v15719 = v1857;
      const v15720 = v1858;
      const v15721 = v1859;
      const v15722 = v1860;
      const v15723 = v3524;
      const v15724 = v1862;
      const v15725 = v1863;
      const v15727 = v3491;
      const v15728 = v1871;
      return;
      
      break;
      }
    case 'Claimant_burnReserve0_194': {
      const v3909 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_194': {
      const v4454 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_194': {
      const v4999 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_194': {
      const v5544 = v2271[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_burnReserve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_burnReserve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_burnReserve4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_194: ctc7,
    AdminAPI_setAdminFee0_194: ctc8,
    AdminAPI_updatePrice0_194: ctc6,
    Claimant_burnReserve0_194: ctc6,
    Claimant_burnStable0_194: ctc6,
    Claimant_mintReserve0_194: ctc6,
    Claimant_mintStable0_194: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v2045 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:506:29:application call to [unknown function] (defined at: ./index.rsh:506:29:function exp)', 'at ./index.rsh:129:23:application call to "runClaimant_burnReserve0_194" (defined at: ./index.rsh:505:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: 'in',
    who: 'Claimant_burnReserve'
    });
  const v2046 = v2045[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2048 = stdlib.gt(v2046, stdlib.checkedBigNumberify('./index.rsh:506:51:decimal', stdlib.UInt_max, '0'));
  const v2049 = stdlib.mul(v2046, v1855);
  const v2051 = stdlib.mul(v2049, v1863);
  const v2052 = stdlib.div(v2051, stdlib.checkedBigNumberify('./index.rsh:507:93:decimal', stdlib.UInt_max, '100'));
  const v2053 = stdlib.mul(v2052, v1857);
  const v2054 = stdlib.div(v2053, stdlib.checkedBigNumberify('./index.rsh:507:115:decimal', stdlib.UInt_max, '100'));
  const v2055 = stdlib.sub(v2049, v2054);
  const v2056 = stdlib.sub(v1859, v2055);
  const v2057 = stdlib.mul(v1850, v1854);
  const v2058 = stdlib.ge(v2056, v2057);
  const v2059 = v2048 ? v2058 : false;
  const v2065 = stdlib.sub(v2049, v2052);
  const v2066 = stdlib.ge(v1871, v2065);
  const v2067 = v2059 ? v2066 : false;
  const v2079 = stdlib.mul(v2052, v1848);
  const v2080 = stdlib.div(v2079, stdlib.checkedBigNumberify('./index.rsh:509:181:decimal', stdlib.UInt_max, '100'));
  const v2081 = stdlib.add(v2054, v2080);
  const v2082 = stdlib.eq(v2052, v2081);
  const v2083 = v2067 ? v2082 : false;
  stdlib.assert(v2083, {
    at: './index.rsh:506:38:application',
    fs: ['at ./index.rsh:506:29:application call to [unknown function] (defined at: ./index.rsh:506:29:function exp)', 'at ./index.rsh:506:29:application call to [unknown function] (defined at: ./index.rsh:506:29:function exp)', 'at ./index.rsh:129:23:application call to "runClaimant_burnReserve0_194" (defined at: ./index.rsh:505:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: null,
    who: 'Claimant_burnReserve'
    });
  const v2087 = ['Claimant_burnReserve0_194', v2045];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871, v2087],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:510:33:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:510:37:decimal', stdlib.UInt_max, '0'), v1806], [v2046, v1770]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
      
      switch (v2271[0]) {
        case 'AdminAPI_claimAdminFee0_194': {
          const v2274 = v2271[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_194': {
          const v2819 = v2271[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_194': {
          const v3364 = v2271[1];
          
          break;
          }
        case 'Claimant_burnReserve0_194': {
          const v3909 = v2271[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_burnReserve"
            });
          const v3947 = v3909[stdlib.checkedBigNumberify('./index.rsh:505:17:spread', stdlib.UInt_max, '0')];
          ;
          const v4019 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v4020 = v4019[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v4024 = v4019[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v4025 = v4019[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v4026 = [v4020, v4024, v4025];
          const v4027 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v4026);
          ;
          const v4028 = v4027[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v4029 = v4028[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v4030 = stdlib.add(v4029, v3947);
          const v4033 = v4028[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v4034 = v4028[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v4035 = [v4030, v4033, v4034];
          const v4036 = stdlib.Array_set(v4027, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v4035);
          sim_r.txns.push({
            amt: v3947,
            kind: 'to',
            tok: v1770
            });
          const v4107 = stdlib.mul(v3947, v1855);
          const v4109 = stdlib.mul(v4107, v1863);
          const v4110 = stdlib.div(v4109, stdlib.checkedBigNumberify('./index.rsh:513:98:decimal', stdlib.UInt_max, '100'));
          const v4111 = stdlib.mul(v4110, v1857);
          const v4112 = stdlib.div(v4111, stdlib.checkedBigNumberify('./index.rsh:513:120:decimal', stdlib.UInt_max, '100'));
          const v4113 = stdlib.sub(v4107, v4112);
          const v4114 = stdlib.sub(v1859, v4113);
          const v4123 = stdlib.sub(v4107, v4110);
          const v4137 = stdlib.mul(v4110, v1848);
          const v4138 = stdlib.div(v4137, stdlib.checkedBigNumberify('./index.rsh:515:186:decimal', stdlib.UInt_max, '100'));
          const v4150 = stdlib.sub(v1871, v4123);
          sim_r.txns.push({
            kind: 'from',
            to: v2270,
            tok: undefined /* Nothing */
            });
          const v4159 = stdlib.sub(v1858, v3947);
          const v4165 = stdlib.add(v1847, v4138);
          let v4166;
          const v4167 = stdlib.eq(v1860, stdlib.checkedBigNumberify('./index.rsh:521:43:decimal', stdlib.UInt_max, '0'));
          if (v4167) {
            v4166 = v1856;
            }
          else {
            const v4168 = stdlib.div(v4114, v1860);
            const v4169 = stdlib.gt(v4168, v1856);
            if (v4169) {
              v4166 = v1856;
              }
            else {
              v4166 = v4168;
              }
            }
          const v4171 = stdlib.mul(v1860, v4166);
          const v4172 = true;
          const v4173 = await txn1.getOutput('Claimant_burnReserve', 'v4172', ctc3, v4172);
          
          let v4179;
          const v4180 = stdlib.gt(v4114, v4171);
          if (v4180) {
            const v4181 = stdlib.sub(v4114, v4171);
            v4179 = v4181;
            }
          else {
            v4179 = stdlib.checkedBigNumberify('./index.rsh:540:40:decimal', stdlib.UInt_max, '0');
            }
          let v4182;
          if (v4167) {
            v4182 = v1856;
            }
          else {
            const v4184 = stdlib.div(v4114, v1860);
            const v4185 = stdlib.gt(v4184, v1856);
            if (v4185) {
              v4182 = v1856;
              }
            else {
              v4182 = v4184;
              }
            }
          let v4187;
          if (v4180) {
            const v4189 = stdlib.sub(v4114, v4171);
            v4187 = v4189;
            }
          else {
            v4187 = stdlib.checkedBigNumberify('./index.rsh:540:40:decimal', stdlib.UInt_max, '0');
            }
          let v4190;
          const v4191 = stdlib.le(v4187, stdlib.checkedBigNumberify('./index.rsh:544:38:decimal', stdlib.UInt_max, '0'));
          if (v4191) {
            v4190 = v1852;
            }
          else {
            const v4192 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:547:60:decimal', stdlib.UInt_max, '0'));
            if (v4192) {
              v4190 = v1852;
              }
            else {
              const v4193 = stdlib.div(v4187, v1858);
              const v4194 = stdlib.gt(v1852, v4193);
              if (v4194) {
                v4190 = v1852;
                }
              else {
                v4190 = v4193;
                }
              }
            }
          const v15869 = v4165;
          const v15870 = v1848;
          const v15871 = v4179;
          const v15872 = v4171;
          const v15873 = v1851;
          const v15874 = v1852;
          const v15875 = v1853;
          const v15876 = v1854;
          const v15877 = v4190;
          const v15878 = v4182;
          const v15879 = v1857;
          const v15880 = v4159;
          const v15881 = v4114;
          const v15882 = v1860;
          const v15883 = v1861;
          const v15884 = v1862;
          const v15885 = v1863;
          const v15887 = v4036;
          const v15888 = v4150;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_burnStable0_194': {
          const v4454 = v2271[1];
          
          break;
          }
        case 'Claimant_mintReserve0_194': {
          const v4999 = v2271[1];
          
          break;
          }
        case 'Claimant_mintStable0_194': {
          const v5544 = v2271[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
  switch (v2271[0]) {
    case 'AdminAPI_claimAdminFee0_194': {
      const v2274 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_194': {
      const v2819 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_194': {
      const v3364 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_194': {
      const v3909 = v2271[1];
      undefined /* setApiDetails */;
      const v3947 = v3909[stdlib.checkedBigNumberify('./index.rsh:505:17:spread', stdlib.UInt_max, '0')];
      ;
      const v4019 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v4020 = v4019[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v4024 = v4019[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v4025 = v4019[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v4026 = [v4020, v4024, v4025];
      const v4027 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v4026);
      ;
      const v4028 = v4027[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v4029 = v4028[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v4030 = stdlib.add(v4029, v3947);
      const v4033 = v4028[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v4034 = v4028[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v4035 = [v4030, v4033, v4034];
      const v4036 = stdlib.Array_set(v4027, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v4035);
      ;
      const v4106 = stdlib.gt(v3947, stdlib.checkedBigNumberify('./index.rsh:512:41:decimal', stdlib.UInt_max, '0'));
      const v4107 = stdlib.mul(v3947, v1855);
      const v4109 = stdlib.mul(v4107, v1863);
      const v4110 = stdlib.div(v4109, stdlib.checkedBigNumberify('./index.rsh:513:98:decimal', stdlib.UInt_max, '100'));
      const v4111 = stdlib.mul(v4110, v1857);
      const v4112 = stdlib.div(v4111, stdlib.checkedBigNumberify('./index.rsh:513:120:decimal', stdlib.UInt_max, '100'));
      const v4113 = stdlib.sub(v4107, v4112);
      const v4114 = stdlib.sub(v1859, v4113);
      const v4115 = stdlib.mul(v1850, v1854);
      const v4116 = stdlib.ge(v4114, v4115);
      const v4117 = v4106 ? v4116 : false;
      const v4123 = stdlib.sub(v4107, v4110);
      const v4124 = stdlib.ge(v1871, v4123);
      const v4125 = v4117 ? v4124 : false;
      const v4137 = stdlib.mul(v4110, v1848);
      const v4138 = stdlib.div(v4137, stdlib.checkedBigNumberify('./index.rsh:515:186:decimal', stdlib.UInt_max, '100'));
      const v4139 = stdlib.add(v4112, v4138);
      const v4140 = stdlib.eq(v4110, v4139);
      const v4141 = v4125 ? v4140 : false;
      stdlib.assert(v4141, {
        at: './index.rsh:512:28:application',
        fs: ['at ./index.rsh:511:32:application call to [unknown function] (defined at: ./index.rsh:511:32:function exp)'],
        msg: null,
        who: 'Claimant_burnReserve'
        });
      const v4150 = stdlib.sub(v1871, v4123);
      ;
      const v4159 = stdlib.sub(v1858, v3947);
      const v4165 = stdlib.add(v1847, v4138);
      let v4166;
      const v4167 = stdlib.eq(v1860, stdlib.checkedBigNumberify('./index.rsh:521:43:decimal', stdlib.UInt_max, '0'));
      if (v4167) {
        v4166 = v1856;
        }
      else {
        const v4168 = stdlib.div(v4114, v1860);
        const v4169 = stdlib.gt(v4168, v1856);
        if (v4169) {
          v4166 = v1856;
          }
        else {
          v4166 = v4168;
          }
        }
      const v4171 = stdlib.mul(v1860, v4166);
      const v4172 = true;
      const v4173 = await txn1.getOutput('Claimant_burnReserve', 'v4172', ctc3, v4172);
      if (v979) {
        stdlib.protect(ctc10, await interact.out(v3909, v4173), {
          at: './index.rsh:505:18:application',
          fs: ['at ./index.rsh:505:18:application call to [unknown function] (defined at: ./index.rsh:505:18:function exp)', 'at ./index.rsh:559:22:application call to "k" (defined at: ./index.rsh:511:32:function exp)', 'at ./index.rsh:511:32:application call to [unknown function] (defined at: ./index.rsh:511:32:function exp)'],
          msg: 'out',
          who: 'Claimant_burnReserve'
          });
        }
      else {
        }
      
      let v4179;
      const v4180 = stdlib.gt(v4114, v4171);
      if (v4180) {
        const v4181 = stdlib.sub(v4114, v4171);
        v4179 = v4181;
        }
      else {
        v4179 = stdlib.checkedBigNumberify('./index.rsh:540:40:decimal', stdlib.UInt_max, '0');
        }
      let v4182;
      if (v4167) {
        v4182 = v1856;
        }
      else {
        const v4184 = stdlib.div(v4114, v1860);
        const v4185 = stdlib.gt(v4184, v1856);
        if (v4185) {
          v4182 = v1856;
          }
        else {
          v4182 = v4184;
          }
        }
      let v4187;
      if (v4180) {
        const v4189 = stdlib.sub(v4114, v4171);
        v4187 = v4189;
        }
      else {
        v4187 = stdlib.checkedBigNumberify('./index.rsh:540:40:decimal', stdlib.UInt_max, '0');
        }
      let v4190;
      const v4191 = stdlib.le(v4187, stdlib.checkedBigNumberify('./index.rsh:544:38:decimal', stdlib.UInt_max, '0'));
      if (v4191) {
        v4190 = v1852;
        }
      else {
        const v4192 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:547:60:decimal', stdlib.UInt_max, '0'));
        if (v4192) {
          v4190 = v1852;
          }
        else {
          const v4193 = stdlib.div(v4187, v1858);
          const v4194 = stdlib.gt(v1852, v4193);
          if (v4194) {
            v4190 = v1852;
            }
          else {
            v4190 = v4193;
            }
          }
        }
      const v15869 = v4165;
      const v15870 = v1848;
      const v15871 = v4179;
      const v15872 = v4171;
      const v15873 = v1851;
      const v15874 = v1852;
      const v15875 = v1853;
      const v15876 = v1854;
      const v15877 = v4190;
      const v15878 = v4182;
      const v15879 = v1857;
      const v15880 = v4159;
      const v15881 = v4114;
      const v15882 = v1860;
      const v15883 = v1861;
      const v15884 = v1862;
      const v15885 = v1863;
      const v15887 = v4036;
      const v15888 = v4150;
      return;
      
      break;
      }
    case 'Claimant_burnStable0_194': {
      const v4454 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_194': {
      const v4999 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_194': {
      const v5544 = v2271[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_burnStable4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_burnStable4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_burnStable4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_194: ctc7,
    AdminAPI_setAdminFee0_194: ctc8,
    AdminAPI_updatePrice0_194: ctc6,
    Claimant_burnReserve0_194: ctc6,
    Claimant_burnStable0_194: ctc6,
    Claimant_mintReserve0_194: ctc6,
    Claimant_mintStable0_194: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v2010 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:434:29:application call to [unknown function] (defined at: ./index.rsh:434:29:function exp)', 'at ./index.rsh:129:23:application call to "runClaimant_burnStable0_194" (defined at: ./index.rsh:433:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: 'in',
    who: 'Claimant_burnStable'
    });
  const v2011 = v2010[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2013 = stdlib.gt(v2011, stdlib.checkedBigNumberify('./index.rsh:434:51:decimal', stdlib.UInt_max, '0'));
  const v2015 = stdlib.mul(v2011, v1856);
  const v2017 = stdlib.mul(v2015, v1863);
  const v2018 = stdlib.div(v2017, stdlib.checkedBigNumberify('./index.rsh:435:94:decimal', stdlib.UInt_max, '100'));
  const v2019 = stdlib.sub(v2015, v2018);
  const v2020 = stdlib.ge(v1871, v2019);
  const v2021 = v2013 ? v2020 : false;
  const v2028 = stdlib.mul(v2018, v1857);
  const v2029 = stdlib.div(v2028, stdlib.checkedBigNumberify('./index.rsh:436:121:decimal', stdlib.UInt_max, '100'));
  const v2033 = stdlib.mul(v2018, v1848);
  const v2034 = stdlib.div(v2033, stdlib.checkedBigNumberify('./index.rsh:436:182:decimal', stdlib.UInt_max, '100'));
  const v2035 = stdlib.add(v2029, v2034);
  const v2036 = stdlib.eq(v2018, v2035);
  const v2037 = v2021 ? v2036 : false;
  stdlib.assert(v2037, {
    at: './index.rsh:434:38:application',
    fs: ['at ./index.rsh:434:29:application call to [unknown function] (defined at: ./index.rsh:434:29:function exp)', 'at ./index.rsh:434:29:application call to [unknown function] (defined at: ./index.rsh:434:29:function exp)', 'at ./index.rsh:129:23:application call to "runClaimant_burnStable0_194" (defined at: ./index.rsh:433:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: null,
    who: 'Claimant_burnStable'
    });
  const v2041 = ['Claimant_burnStable0_194', v2010];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871, v2041],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:437:33:decimal', stdlib.UInt_max, '0'), [[v2011, v1806], [stdlib.checkedBigNumberify('./index.rsh:437:67:decimal', stdlib.UInt_max, '0'), v1770]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
      
      switch (v2271[0]) {
        case 'AdminAPI_claimAdminFee0_194': {
          const v2274 = v2271[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_194': {
          const v2819 = v2271[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_194': {
          const v3364 = v2271[1];
          
          break;
          }
        case 'Claimant_burnReserve0_194': {
          const v3909 = v2271[1];
          
          break;
          }
        case 'Claimant_burnStable0_194': {
          const v4454 = v2271[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_burnStable"
            });
          const v4503 = v4454[stdlib.checkedBigNumberify('./index.rsh:433:17:spread', stdlib.UInt_max, '0')];
          ;
          const v4564 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v4565 = v4564[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v4566 = stdlib.add(v4565, v4503);
          const v4569 = v4564[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v4570 = v4564[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v4571 = [v4566, v4569, v4570];
          const v4572 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v4571);
          sim_r.txns.push({
            amt: v4503,
            kind: 'to',
            tok: v1806
            });
          const v4573 = v4572[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v4574 = v4573[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v4578 = v4573[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v4579 = v4573[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v4580 = [v4574, v4578, v4579];
          const v4581 = stdlib.Array_set(v4572, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v4580);
          ;
          const v4746 = stdlib.mul(v4503, v1856);
          const v4748 = stdlib.mul(v4746, v1863);
          const v4749 = stdlib.div(v4748, stdlib.checkedBigNumberify('./index.rsh:440:98:decimal', stdlib.UInt_max, '100'));
          const v4750 = stdlib.sub(v4746, v4749);
          const v4759 = stdlib.mul(v4749, v1857);
          const v4760 = stdlib.div(v4759, stdlib.checkedBigNumberify('./index.rsh:441:123:decimal', stdlib.UInt_max, '100'));
          const v4764 = stdlib.mul(v4749, v1848);
          const v4765 = stdlib.div(v4764, stdlib.checkedBigNumberify('./index.rsh:441:184:decimal', stdlib.UInt_max, '100'));
          const v4777 = stdlib.sub(v1871, v4750);
          sim_r.txns.push({
            kind: 'from',
            to: v2270,
            tok: undefined /* Nothing */
            });
          const v4784 = stdlib.sub(v4746, v4760);
          const v4785 = stdlib.sub(v1859, v4784);
          const v4786 = stdlib.sub(v1860, v4503);
          const v4792 = stdlib.add(v1847, v4765);
          let v4793;
          const v4794 = stdlib.eq(v4786, stdlib.checkedBigNumberify('./index.rsh:447:39:decimal', stdlib.UInt_max, '0'));
          if (v4794) {
            v4793 = v1856;
            }
          else {
            const v4795 = stdlib.div(v4785, v4786);
            const v4796 = stdlib.gt(v4795, v1856);
            if (v4796) {
              v4793 = v1856;
              }
            else {
              v4793 = v4795;
              }
            }
          const v4798 = stdlib.mul(v4786, v4793);
          const v4799 = true;
          const v4800 = await txn1.getOutput('Claimant_burnStable', 'v4799', ctc3, v4799);
          
          let v4806;
          const v4807 = stdlib.gt(v4785, v4798);
          if (v4807) {
            const v4808 = stdlib.sub(v4785, v4798);
            v4806 = v4808;
            }
          else {
            v4806 = stdlib.checkedBigNumberify('./index.rsh:466:36:decimal', stdlib.UInt_max, '0');
            }
          let v4809;
          if (v4794) {
            v4809 = v1856;
            }
          else {
            const v4811 = stdlib.div(v4785, v4786);
            const v4812 = stdlib.gt(v4811, v1856);
            if (v4812) {
              v4809 = v1856;
              }
            else {
              v4809 = v4811;
              }
            }
          let v4814;
          if (v4807) {
            const v4816 = stdlib.sub(v4785, v4798);
            v4814 = v4816;
            }
          else {
            v4814 = stdlib.checkedBigNumberify('./index.rsh:466:36:decimal', stdlib.UInt_max, '0');
            }
          let v4817;
          const v4818 = stdlib.le(v4814, stdlib.checkedBigNumberify('./index.rsh:471:34:decimal', stdlib.UInt_max, '0'));
          if (v4818) {
            v4817 = v1852;
            }
          else {
            const v4819 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:474:56:decimal', stdlib.UInt_max, '0'));
            if (v4819) {
              v4817 = v1852;
              }
            else {
              const v4820 = stdlib.div(v4814, v1858);
              const v4821 = stdlib.gt(v1852, v4820);
              if (v4821) {
                v4817 = v1852;
                }
              else {
                v4817 = v4820;
                }
              }
            }
          const v16029 = v4792;
          const v16030 = v1848;
          const v16031 = v4806;
          const v16032 = v4798;
          const v16033 = v1851;
          const v16034 = v1852;
          const v16035 = v1853;
          const v16036 = v1854;
          const v16037 = v4817;
          const v16038 = v4809;
          const v16039 = v1857;
          const v16040 = v1858;
          const v16041 = v4785;
          const v16042 = v4786;
          const v16043 = v1861;
          const v16044 = v1862;
          const v16045 = v1863;
          const v16047 = v4581;
          const v16048 = v4777;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_mintReserve0_194': {
          const v4999 = v2271[1];
          
          break;
          }
        case 'Claimant_mintStable0_194': {
          const v5544 = v2271[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
  switch (v2271[0]) {
    case 'AdminAPI_claimAdminFee0_194': {
      const v2274 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_194': {
      const v2819 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_194': {
      const v3364 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_194': {
      const v3909 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_194': {
      const v4454 = v2271[1];
      undefined /* setApiDetails */;
      const v4503 = v4454[stdlib.checkedBigNumberify('./index.rsh:433:17:spread', stdlib.UInt_max, '0')];
      ;
      const v4564 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v4565 = v4564[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v4566 = stdlib.add(v4565, v4503);
      const v4569 = v4564[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v4570 = v4564[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v4571 = [v4566, v4569, v4570];
      const v4572 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v4571);
      ;
      const v4573 = v4572[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v4574 = v4573[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v4578 = v4573[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v4579 = v4573[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v4580 = [v4574, v4578, v4579];
      const v4581 = stdlib.Array_set(v4572, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v4580);
      ;
      const v4744 = stdlib.gt(v4503, stdlib.checkedBigNumberify('./index.rsh:439:41:decimal', stdlib.UInt_max, '0'));
      const v4746 = stdlib.mul(v4503, v1856);
      const v4748 = stdlib.mul(v4746, v1863);
      const v4749 = stdlib.div(v4748, stdlib.checkedBigNumberify('./index.rsh:440:98:decimal', stdlib.UInt_max, '100'));
      const v4750 = stdlib.sub(v4746, v4749);
      const v4751 = stdlib.ge(v1871, v4750);
      const v4752 = v4744 ? v4751 : false;
      const v4759 = stdlib.mul(v4749, v1857);
      const v4760 = stdlib.div(v4759, stdlib.checkedBigNumberify('./index.rsh:441:123:decimal', stdlib.UInt_max, '100'));
      const v4764 = stdlib.mul(v4749, v1848);
      const v4765 = stdlib.div(v4764, stdlib.checkedBigNumberify('./index.rsh:441:184:decimal', stdlib.UInt_max, '100'));
      const v4766 = stdlib.add(v4760, v4765);
      const v4767 = stdlib.eq(v4749, v4766);
      const v4768 = v4752 ? v4767 : false;
      stdlib.assert(v4768, {
        at: './index.rsh:439:28:application',
        fs: ['at ./index.rsh:438:32:application call to [unknown function] (defined at: ./index.rsh:438:32:function exp)'],
        msg: null,
        who: 'Claimant_burnStable'
        });
      const v4777 = stdlib.sub(v1871, v4750);
      ;
      const v4784 = stdlib.sub(v4746, v4760);
      const v4785 = stdlib.sub(v1859, v4784);
      const v4786 = stdlib.sub(v1860, v4503);
      const v4792 = stdlib.add(v1847, v4765);
      let v4793;
      const v4794 = stdlib.eq(v4786, stdlib.checkedBigNumberify('./index.rsh:447:39:decimal', stdlib.UInt_max, '0'));
      if (v4794) {
        v4793 = v1856;
        }
      else {
        const v4795 = stdlib.div(v4785, v4786);
        const v4796 = stdlib.gt(v4795, v1856);
        if (v4796) {
          v4793 = v1856;
          }
        else {
          v4793 = v4795;
          }
        }
      const v4798 = stdlib.mul(v4786, v4793);
      const v4799 = true;
      const v4800 = await txn1.getOutput('Claimant_burnStable', 'v4799', ctc3, v4799);
      if (v979) {
        stdlib.protect(ctc10, await interact.out(v4454, v4800), {
          at: './index.rsh:433:18:application',
          fs: ['at ./index.rsh:433:18:application call to [unknown function] (defined at: ./index.rsh:433:18:function exp)', 'at ./index.rsh:486:22:application call to "k" (defined at: ./index.rsh:438:32:function exp)', 'at ./index.rsh:438:32:application call to [unknown function] (defined at: ./index.rsh:438:32:function exp)'],
          msg: 'out',
          who: 'Claimant_burnStable'
          });
        }
      else {
        }
      
      let v4806;
      const v4807 = stdlib.gt(v4785, v4798);
      if (v4807) {
        const v4808 = stdlib.sub(v4785, v4798);
        v4806 = v4808;
        }
      else {
        v4806 = stdlib.checkedBigNumberify('./index.rsh:466:36:decimal', stdlib.UInt_max, '0');
        }
      let v4809;
      if (v4794) {
        v4809 = v1856;
        }
      else {
        const v4811 = stdlib.div(v4785, v4786);
        const v4812 = stdlib.gt(v4811, v1856);
        if (v4812) {
          v4809 = v1856;
          }
        else {
          v4809 = v4811;
          }
        }
      let v4814;
      if (v4807) {
        const v4816 = stdlib.sub(v4785, v4798);
        v4814 = v4816;
        }
      else {
        v4814 = stdlib.checkedBigNumberify('./index.rsh:466:36:decimal', stdlib.UInt_max, '0');
        }
      let v4817;
      const v4818 = stdlib.le(v4814, stdlib.checkedBigNumberify('./index.rsh:471:34:decimal', stdlib.UInt_max, '0'));
      if (v4818) {
        v4817 = v1852;
        }
      else {
        const v4819 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:474:56:decimal', stdlib.UInt_max, '0'));
        if (v4819) {
          v4817 = v1852;
          }
        else {
          const v4820 = stdlib.div(v4814, v1858);
          const v4821 = stdlib.gt(v1852, v4820);
          if (v4821) {
            v4817 = v1852;
            }
          else {
            v4817 = v4820;
            }
          }
        }
      const v16029 = v4792;
      const v16030 = v1848;
      const v16031 = v4806;
      const v16032 = v4798;
      const v16033 = v1851;
      const v16034 = v1852;
      const v16035 = v1853;
      const v16036 = v1854;
      const v16037 = v4817;
      const v16038 = v4809;
      const v16039 = v1857;
      const v16040 = v1858;
      const v16041 = v4785;
      const v16042 = v4786;
      const v16043 = v1861;
      const v16044 = v1862;
      const v16045 = v1863;
      const v16047 = v4581;
      const v16048 = v4777;
      return;
      
      break;
      }
    case 'Claimant_mintReserve0_194': {
      const v4999 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_194': {
      const v5544 = v2271[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_mintReserve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_mintReserve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_mintReserve4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_194: ctc7,
    AdminAPI_setAdminFee0_194: ctc8,
    AdminAPI_updatePrice0_194: ctc6,
    Claimant_burnReserve0_194: ctc6,
    Claimant_burnStable0_194: ctc6,
    Claimant_mintReserve0_194: ctc6,
    Claimant_mintStable0_194: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v1969 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:360:27:application call to [unknown function] (defined at: ./index.rsh:360:27:function exp)', 'at ./index.rsh:129:23:application call to "runClaimant_mintReserve0_194" (defined at: ./index.rsh:359:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: 'in',
    who: 'Claimant_mintReserve'
    });
  const v1970 = v1969[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1972 = stdlib.gt(v1970, stdlib.checkedBigNumberify('./index.rsh:360:47:decimal', stdlib.UInt_max, '0'));
  const v1973 = stdlib.mul(v1970, v1863);
  const v1974 = stdlib.div(v1973, stdlib.checkedBigNumberify('./index.rsh:361:71:decimal', stdlib.UInt_max, '100'));
  const v1975 = stdlib.mul(v1974, v1857);
  const v1976 = stdlib.div(v1975, stdlib.checkedBigNumberify('./index.rsh:361:93:decimal', stdlib.UInt_max, '100'));
  const v1977 = stdlib.add(v1970, v1976);
  const v1978 = stdlib.add(v1859, v1977);
  const v1979 = stdlib.add(v1850, v1970);
  const v1980 = stdlib.mul(v1979, v1851);
  const v1981 = stdlib.le(v1978, v1980);
  const v1982 = stdlib.lt(v1858, v1862);
  const v1983 = v1981 ? true : v1982;
  const v1984 = v1972 ? v1983 : false;
  const v1985 = v1870[stdlib.checkedBigNumberify('./index.rsh:362:31:application', stdlib.UInt_max, '0')];
  const v1986 = v1985[stdlib.checkedBigNumberify('./index.rsh:362:31:application', stdlib.UInt_max, '0')];
  const v1987 = stdlib.div(v1970, v1855);
  const v1988 = stdlib.ge(v1986, v1987);
  const v1989 = v1984 ? v1988 : false;
  const v1998 = stdlib.mul(v1974, v1848);
  const v1999 = stdlib.div(v1998, stdlib.checkedBigNumberify('./index.rsh:363:144:decimal', stdlib.UInt_max, '100'));
  const v2000 = stdlib.add(v1976, v1999);
  const v2001 = stdlib.eq(v1974, v2000);
  const v2002 = v1989 ? v2001 : false;
  stdlib.assert(v2002, {
    at: './index.rsh:360:36:application',
    fs: ['at ./index.rsh:360:27:application call to [unknown function] (defined at: ./index.rsh:360:27:function exp)', 'at ./index.rsh:360:27:application call to [unknown function] (defined at: ./index.rsh:360:27:function exp)', 'at ./index.rsh:129:23:application call to "runClaimant_mintReserve0_194" (defined at: ./index.rsh:359:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: null,
    who: 'Claimant_mintReserve'
    });
  const v2006 = ['Claimant_mintReserve0_194', v1969];
  
  const v2218 = stdlib.add(v1970, v1974);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871, v2006],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v2218, [[stdlib.checkedBigNumberify('./index.rsh:364:72:decimal', stdlib.UInt_max, '0'), v1806], [stdlib.checkedBigNumberify('./index.rsh:364:94:decimal', stdlib.UInt_max, '0'), v1770]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
      
      switch (v2271[0]) {
        case 'AdminAPI_claimAdminFee0_194': {
          const v2274 = v2271[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_194': {
          const v2819 = v2271[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_194': {
          const v3364 = v2271[1];
          
          break;
          }
        case 'Claimant_burnReserve0_194': {
          const v3909 = v2271[1];
          
          break;
          }
        case 'Claimant_burnStable0_194': {
          const v4454 = v2271[1];
          
          break;
          }
        case 'Claimant_mintReserve0_194': {
          const v4999 = v2271[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_mintReserve"
            });
          const v5059 = v4999[stdlib.checkedBigNumberify('./index.rsh:359:17:spread', stdlib.UInt_max, '0')];
          const v5060 = stdlib.mul(v5059, v1863);
          const v5061 = stdlib.div(v5060, stdlib.checkedBigNumberify('./index.rsh:364:64:decimal', stdlib.UInt_max, '100'));
          const v5062 = stdlib.add(v5059, v5061);
          const v5108 = stdlib.add(v1871, v5062);
          sim_r.txns.push({
            amt: v5062,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5109 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v5110 = v5109[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v5114 = v5109[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v5115 = v5109[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v5116 = [v5110, v5114, v5115];
          const v5117 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v5116);
          ;
          const v5118 = v5117[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v5119 = v5118[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v5123 = v5118[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v5124 = v5118[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v5125 = [v5119, v5123, v5124];
          const v5126 = stdlib.Array_set(v5117, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v5125);
          ;
          const v5374 = stdlib.mul(v5061, v1857);
          const v5375 = stdlib.div(v5374, stdlib.checkedBigNumberify('./index.rsh:367:97:decimal', stdlib.UInt_max, '100'));
          const v5376 = stdlib.add(v5059, v5375);
          const v5377 = stdlib.add(v1859, v5376);
          const v5384 = v5126[stdlib.checkedBigNumberify('./index.rsh:368:35:application', stdlib.UInt_max, '0')];
          const v5385 = v5384[stdlib.checkedBigNumberify('./index.rsh:368:35:application', stdlib.UInt_max, '0')];
          const v5386 = stdlib.div(v5059, v1855);
          const v5397 = stdlib.mul(v5061, v1848);
          const v5398 = stdlib.div(v5397, stdlib.checkedBigNumberify('./index.rsh:369:148:decimal', stdlib.UInt_max, '100'));
          const v5408 = stdlib.sub(v5385, v5386);
          const v5411 = v5384[stdlib.checkedBigNumberify('./index.rsh:370:76:application', stdlib.UInt_max, '1')];
          const v5412 = v5384[stdlib.checkedBigNumberify('./index.rsh:370:76:application', stdlib.UInt_max, '2')];
          const v5413 = [v5408, v5411, v5412];
          const v5414 = stdlib.Array_set(v5126, stdlib.checkedBigNumberify('./index.rsh:370:76:application', stdlib.UInt_max, '0'), v5413);
          sim_r.txns.push({
            kind: 'from',
            to: v2270,
            tok: v1770
            });
          const v5422 = stdlib.add(v1858, v5386);
          const v5427 = stdlib.add(v1847, v5398);
          let v5428;
          const v5429 = stdlib.eq(v1860, stdlib.checkedBigNumberify('./index.rsh:375:39:decimal', stdlib.UInt_max, '0'));
          if (v5429) {
            v5428 = v1856;
            }
          else {
            const v5430 = stdlib.div(v5377, v1860);
            const v5431 = stdlib.gt(v5430, v1856);
            if (v5431) {
              v5428 = v1856;
              }
            else {
              v5428 = v5430;
              }
            }
          const v5433 = stdlib.mul(v1860, v5428);
          const v5434 = true;
          const v5435 = await txn1.getOutput('Claimant_mintReserve', 'v5434', ctc3, v5434);
          
          let v5441;
          const v5442 = stdlib.gt(v5377, v5433);
          if (v5442) {
            const v5443 = stdlib.sub(v5377, v5433);
            v5441 = v5443;
            }
          else {
            v5441 = stdlib.checkedBigNumberify('./index.rsh:394:36:decimal', stdlib.UInt_max, '0');
            }
          let v5444;
          if (v5429) {
            v5444 = v1856;
            }
          else {
            const v5446 = stdlib.div(v5377, v1860);
            const v5447 = stdlib.gt(v5446, v1856);
            if (v5447) {
              v5444 = v1856;
              }
            else {
              v5444 = v5446;
              }
            }
          let v5449;
          if (v5442) {
            const v5451 = stdlib.sub(v5377, v5433);
            v5449 = v5451;
            }
          else {
            v5449 = stdlib.checkedBigNumberify('./index.rsh:394:36:decimal', stdlib.UInt_max, '0');
            }
          let v5452;
          const v5453 = stdlib.le(v5449, stdlib.checkedBigNumberify('./index.rsh:399:34:decimal', stdlib.UInt_max, '0'));
          if (v5453) {
            v5452 = v1852;
            }
          else {
            const v5454 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:402:56:decimal', stdlib.UInt_max, '0'));
            if (v5454) {
              v5452 = v1852;
              }
            else {
              const v5455 = stdlib.div(v5449, v1858);
              const v5456 = stdlib.gt(v1852, v5455);
              if (v5456) {
                v5452 = v1852;
                }
              else {
                v5452 = v5455;
                }
              }
            }
          const v16189 = v5427;
          const v16190 = v1848;
          const v16191 = v5441;
          const v16192 = v5433;
          const v16193 = v1851;
          const v16194 = v1852;
          const v16195 = v1853;
          const v16196 = v1854;
          const v16197 = v5452;
          const v16198 = v5444;
          const v16199 = v1857;
          const v16200 = v5422;
          const v16201 = v5377;
          const v16202 = v1860;
          const v16203 = v1861;
          const v16204 = v1862;
          const v16205 = v1863;
          const v16207 = v5414;
          const v16208 = v5108;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Claimant_mintStable0_194': {
          const v5544 = v2271[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
  switch (v2271[0]) {
    case 'AdminAPI_claimAdminFee0_194': {
      const v2274 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_194': {
      const v2819 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_194': {
      const v3364 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_194': {
      const v3909 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_194': {
      const v4454 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_194': {
      const v4999 = v2271[1];
      undefined /* setApiDetails */;
      const v5059 = v4999[stdlib.checkedBigNumberify('./index.rsh:359:17:spread', stdlib.UInt_max, '0')];
      const v5060 = stdlib.mul(v5059, v1863);
      const v5061 = stdlib.div(v5060, stdlib.checkedBigNumberify('./index.rsh:364:64:decimal', stdlib.UInt_max, '100'));
      const v5062 = stdlib.add(v5059, v5061);
      const v5108 = stdlib.add(v1871, v5062);
      ;
      const v5109 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v5110 = v5109[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v5114 = v5109[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v5115 = v5109[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v5116 = [v5110, v5114, v5115];
      const v5117 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v5116);
      ;
      const v5118 = v5117[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v5119 = v5118[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v5123 = v5118[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v5124 = v5118[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v5125 = [v5119, v5123, v5124];
      const v5126 = stdlib.Array_set(v5117, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v5125);
      ;
      const v5371 = stdlib.gt(v5059, stdlib.checkedBigNumberify('./index.rsh:366:39:decimal', stdlib.UInt_max, '0'));
      const v5374 = stdlib.mul(v5061, v1857);
      const v5375 = stdlib.div(v5374, stdlib.checkedBigNumberify('./index.rsh:367:97:decimal', stdlib.UInt_max, '100'));
      const v5376 = stdlib.add(v5059, v5375);
      const v5377 = stdlib.add(v1859, v5376);
      const v5378 = stdlib.add(v1850, v5059);
      const v5379 = stdlib.mul(v5378, v1851);
      const v5380 = stdlib.le(v5377, v5379);
      const v5381 = stdlib.lt(v1858, v1862);
      const v5382 = v5380 ? true : v5381;
      const v5383 = v5371 ? v5382 : false;
      const v5384 = v5126[stdlib.checkedBigNumberify('./index.rsh:368:35:application', stdlib.UInt_max, '0')];
      const v5385 = v5384[stdlib.checkedBigNumberify('./index.rsh:368:35:application', stdlib.UInt_max, '0')];
      const v5386 = stdlib.div(v5059, v1855);
      const v5387 = stdlib.ge(v5385, v5386);
      const v5388 = v5383 ? v5387 : false;
      const v5397 = stdlib.mul(v5061, v1848);
      const v5398 = stdlib.div(v5397, stdlib.checkedBigNumberify('./index.rsh:369:148:decimal', stdlib.UInt_max, '100'));
      const v5399 = stdlib.add(v5375, v5398);
      const v5400 = stdlib.eq(v5061, v5399);
      const v5401 = v5388 ? v5400 : false;
      stdlib.assert(v5401, {
        at: './index.rsh:366:28:application',
        fs: ['at ./index.rsh:365:30:application call to [unknown function] (defined at: ./index.rsh:365:30:function exp)'],
        msg: null,
        who: 'Claimant_mintReserve'
        });
      const v5408 = stdlib.sub(v5385, v5386);
      const v5411 = v5384[stdlib.checkedBigNumberify('./index.rsh:370:76:application', stdlib.UInt_max, '1')];
      const v5412 = v5384[stdlib.checkedBigNumberify('./index.rsh:370:76:application', stdlib.UInt_max, '2')];
      const v5413 = [v5408, v5411, v5412];
      const v5414 = stdlib.Array_set(v5126, stdlib.checkedBigNumberify('./index.rsh:370:76:application', stdlib.UInt_max, '0'), v5413);
      ;
      const v5422 = stdlib.add(v1858, v5386);
      const v5427 = stdlib.add(v1847, v5398);
      let v5428;
      const v5429 = stdlib.eq(v1860, stdlib.checkedBigNumberify('./index.rsh:375:39:decimal', stdlib.UInt_max, '0'));
      if (v5429) {
        v5428 = v1856;
        }
      else {
        const v5430 = stdlib.div(v5377, v1860);
        const v5431 = stdlib.gt(v5430, v1856);
        if (v5431) {
          v5428 = v1856;
          }
        else {
          v5428 = v5430;
          }
        }
      const v5433 = stdlib.mul(v1860, v5428);
      const v5434 = true;
      const v5435 = await txn1.getOutput('Claimant_mintReserve', 'v5434', ctc3, v5434);
      if (v979) {
        stdlib.protect(ctc10, await interact.out(v4999, v5435), {
          at: './index.rsh:359:18:application',
          fs: ['at ./index.rsh:359:18:application call to [unknown function] (defined at: ./index.rsh:359:18:function exp)', 'at ./index.rsh:414:22:application call to "k" (defined at: ./index.rsh:365:30:function exp)', 'at ./index.rsh:365:30:application call to [unknown function] (defined at: ./index.rsh:365:30:function exp)'],
          msg: 'out',
          who: 'Claimant_mintReserve'
          });
        }
      else {
        }
      
      let v5441;
      const v5442 = stdlib.gt(v5377, v5433);
      if (v5442) {
        const v5443 = stdlib.sub(v5377, v5433);
        v5441 = v5443;
        }
      else {
        v5441 = stdlib.checkedBigNumberify('./index.rsh:394:36:decimal', stdlib.UInt_max, '0');
        }
      let v5444;
      if (v5429) {
        v5444 = v1856;
        }
      else {
        const v5446 = stdlib.div(v5377, v1860);
        const v5447 = stdlib.gt(v5446, v1856);
        if (v5447) {
          v5444 = v1856;
          }
        else {
          v5444 = v5446;
          }
        }
      let v5449;
      if (v5442) {
        const v5451 = stdlib.sub(v5377, v5433);
        v5449 = v5451;
        }
      else {
        v5449 = stdlib.checkedBigNumberify('./index.rsh:394:36:decimal', stdlib.UInt_max, '0');
        }
      let v5452;
      const v5453 = stdlib.le(v5449, stdlib.checkedBigNumberify('./index.rsh:399:34:decimal', stdlib.UInt_max, '0'));
      if (v5453) {
        v5452 = v1852;
        }
      else {
        const v5454 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:402:56:decimal', stdlib.UInt_max, '0'));
        if (v5454) {
          v5452 = v1852;
          }
        else {
          const v5455 = stdlib.div(v5449, v1858);
          const v5456 = stdlib.gt(v1852, v5455);
          if (v5456) {
            v5452 = v1852;
            }
          else {
            v5452 = v5455;
            }
          }
        }
      const v16189 = v5427;
      const v16190 = v1848;
      const v16191 = v5441;
      const v16192 = v5433;
      const v16193 = v1851;
      const v16194 = v1852;
      const v16195 = v1853;
      const v16196 = v1854;
      const v16197 = v5452;
      const v16198 = v5444;
      const v16199 = v1857;
      const v16200 = v5422;
      const v16201 = v5377;
      const v16202 = v1860;
      const v16203 = v1861;
      const v16204 = v1862;
      const v16205 = v1863;
      const v16207 = v5414;
      const v16208 = v5108;
      return;
      
      break;
      }
    case 'Claimant_mintStable0_194': {
      const v5544 = v2271[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Claimant_mintStable4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Claimant_mintStable4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Claimant_mintStable4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    AdminAPI_claimAdminFee0_194: ctc7,
    AdminAPI_setAdminFee0_194: ctc8,
    AdminAPI_updatePrice0_194: ctc6,
    Claimant_burnReserve0_194: ctc6,
    Claimant_burnStable0_194: ctc6,
    Claimant_mintReserve0_194: ctc6,
    Claimant_mintStable0_194: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]);
  const v1930 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:290:27:application call to [unknown function] (defined at: ./index.rsh:290:27:function exp)', 'at ./index.rsh:129:23:application call to "runClaimant_mintStable0_194" (defined at: ./index.rsh:289:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: 'in',
    who: 'Claimant_mintStable'
    });
  const v1931 = v1930[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1933 = stdlib.gt(v1931, stdlib.checkedBigNumberify('./index.rsh:290:47:decimal', stdlib.UInt_max, '0'));
  const v1934 = stdlib.mul(v1931, v1863);
  const v1935 = stdlib.div(v1934, stdlib.checkedBigNumberify('./index.rsh:291:70:decimal', stdlib.UInt_max, '100'));
  const v1936 = stdlib.mul(v1935, v1857);
  const v1937 = stdlib.div(v1936, stdlib.checkedBigNumberify('./index.rsh:291:92:decimal', stdlib.UInt_max, '100'));
  const v1938 = stdlib.add(v1931, v1937);
  const v1939 = stdlib.add(v1859, v1938);
  const v1940 = stdlib.add(v1850, v1931);
  const v1941 = stdlib.mul(v1940, v1854);
  const v1942 = stdlib.ge(v1939, v1941);
  const v1943 = v1933 ? v1942 : false;
  const v1944 = v1870[stdlib.checkedBigNumberify('./index.rsh:292:31:application', stdlib.UInt_max, '1')];
  const v1945 = v1944[stdlib.checkedBigNumberify('./index.rsh:292:31:application', stdlib.UInt_max, '0')];
  const v1946 = stdlib.div(v1931, v1856);
  const v1947 = stdlib.ge(v1945, v1946);
  const v1948 = v1943 ? v1947 : false;
  const v1957 = stdlib.mul(v1935, v1848);
  const v1958 = stdlib.div(v1957, stdlib.checkedBigNumberify('./index.rsh:293:144:decimal', stdlib.UInt_max, '100'));
  const v1959 = stdlib.add(v1937, v1958);
  const v1960 = stdlib.eq(v1935, v1959);
  const v1961 = v1948 ? v1960 : false;
  stdlib.assert(v1961, {
    at: './index.rsh:290:36:application',
    fs: ['at ./index.rsh:290:27:application call to [unknown function] (defined at: ./index.rsh:290:27:function exp)', 'at ./index.rsh:290:27:application call to [unknown function] (defined at: ./index.rsh:290:27:function exp)', 'at ./index.rsh:129:23:application call to "runClaimant_mintStable0_194" (defined at: ./index.rsh:289:17:function exp)', 'at ./index.rsh:129:23:application call to [unknown function] (defined at: ./index.rsh:129:23:function exp)'],
    msg: null,
    who: 'Claimant_mintStable'
    });
  const v1965 = ['Claimant_mintStable0_194', v1930];
  
  const v2246 = stdlib.add(v1931, v1935);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1740, v1770, v1806, v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854, v1855, v1856, v1857, v1858, v1859, v1860, v1861, v1862, v1863, v1870, v1871, v1965],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v2246, [[stdlib.checkedBigNumberify('./index.rsh:294:72:decimal', stdlib.UInt_max, '0'), v1806], [stdlib.checkedBigNumberify('./index.rsh:294:94:decimal', stdlib.UInt_max, '0'), v1770]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
      
      switch (v2271[0]) {
        case 'AdminAPI_claimAdminFee0_194': {
          const v2274 = v2271[1];
          
          break;
          }
        case 'AdminAPI_setAdminFee0_194': {
          const v2819 = v2271[1];
          
          break;
          }
        case 'AdminAPI_updatePrice0_194': {
          const v3364 = v2271[1];
          
          break;
          }
        case 'Claimant_burnReserve0_194': {
          const v3909 = v2271[1];
          
          break;
          }
        case 'Claimant_burnStable0_194': {
          const v4454 = v2271[1];
          
          break;
          }
        case 'Claimant_mintReserve0_194': {
          const v4999 = v2271[1];
          
          break;
          }
        case 'Claimant_mintStable0_194': {
          const v5544 = v2271[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Claimant_mintStable"
            });
          const v5618 = v5544[stdlib.checkedBigNumberify('./index.rsh:289:17:spread', stdlib.UInt_max, '0')];
          const v5619 = stdlib.mul(v5618, v1863);
          const v5620 = stdlib.div(v5619, stdlib.checkedBigNumberify('./index.rsh:294:64:decimal', stdlib.UInt_max, '100'));
          const v5621 = stdlib.add(v5618, v5620);
          const v5653 = stdlib.add(v1871, v5621);
          sim_r.txns.push({
            amt: v5621,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5654 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v5655 = v5654[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v5659 = v5654[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v5660 = v5654[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v5661 = [v5655, v5659, v5660];
          const v5662 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v5661);
          ;
          const v5663 = v5662[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v5664 = v5663[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
          const v5668 = v5663[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
          const v5669 = v5663[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
          const v5670 = [v5664, v5668, v5669];
          const v5671 = stdlib.Array_set(v5662, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v5670);
          ;
          const v6009 = stdlib.mul(v5620, v1857);
          const v6010 = stdlib.div(v6009, stdlib.checkedBigNumberify('./index.rsh:297:96:decimal', stdlib.UInt_max, '100'));
          const v6011 = stdlib.add(v5618, v6010);
          const v6012 = stdlib.add(v1859, v6011);
          const v6016 = v5671[stdlib.checkedBigNumberify('./index.rsh:298:35:application', stdlib.UInt_max, '1')];
          const v6017 = v6016[stdlib.checkedBigNumberify('./index.rsh:298:35:application', stdlib.UInt_max, '0')];
          const v6018 = stdlib.div(v5618, v1856);
          const v6029 = stdlib.mul(v5620, v1848);
          const v6030 = stdlib.div(v6029, stdlib.checkedBigNumberify('./index.rsh:299:148:decimal', stdlib.UInt_max, '100'));
          const v6040 = stdlib.sub(v6017, v6018);
          const v6043 = v6016[stdlib.checkedBigNumberify('./index.rsh:300:75:application', stdlib.UInt_max, '1')];
          const v6044 = v6016[stdlib.checkedBigNumberify('./index.rsh:300:75:application', stdlib.UInt_max, '2')];
          const v6045 = [v6040, v6043, v6044];
          const v6046 = stdlib.Array_set(v5671, stdlib.checkedBigNumberify('./index.rsh:300:75:application', stdlib.UInt_max, '1'), v6045);
          sim_r.txns.push({
            kind: 'from',
            to: v2270,
            tok: v1806
            });
          const v6054 = stdlib.add(v1860, v6018);
          const v6059 = stdlib.add(v1847, v6030);
          let v6060;
          const v6061 = stdlib.div(v6012, v6054);
          const v6062 = stdlib.gt(v6061, v1856);
          if (v6062) {
            v6060 = v1856;
            }
          else {
            v6060 = v6061;
            }
          const v6064 = stdlib.mul(v6054, v6060);
          const v6065 = true;
          const v6066 = await txn1.getOutput('Claimant_mintStable', 'v6065', ctc3, v6065);
          
          let v6072;
          const v6073 = stdlib.gt(v6012, v6064);
          if (v6073) {
            const v6074 = stdlib.sub(v6012, v6064);
            v6072 = v6074;
            }
          else {
            v6072 = stdlib.checkedBigNumberify('./index.rsh:318:36:decimal', stdlib.UInt_max, '0');
            }
          let v6075;
          if (v6062) {
            v6075 = v1856;
            }
          else {
            v6075 = v6061;
            }
          let v6079;
          if (v6073) {
            const v6081 = stdlib.sub(v6012, v6064);
            v6079 = v6081;
            }
          else {
            v6079 = stdlib.checkedBigNumberify('./index.rsh:318:36:decimal', stdlib.UInt_max, '0');
            }
          let v6082;
          const v6083 = stdlib.le(v6079, stdlib.checkedBigNumberify('./index.rsh:323:34:decimal', stdlib.UInt_max, '0'));
          if (v6083) {
            v6082 = v1852;
            }
          else {
            const v6084 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:326:56:decimal', stdlib.UInt_max, '0'));
            if (v6084) {
              v6082 = v1852;
              }
            else {
              const v6085 = stdlib.div(v6079, v1858);
              const v6086 = stdlib.gt(v1852, v6085);
              if (v6086) {
                v6082 = v1852;
                }
              else {
                v6082 = v6085;
                }
              }
            }
          const v16349 = v6059;
          const v16350 = v1848;
          const v16351 = v6072;
          const v16352 = v6064;
          const v16353 = v1851;
          const v16354 = v1852;
          const v16355 = v1853;
          const v16356 = v1854;
          const v16357 = v6082;
          const v16358 = v6075;
          const v16359 = v1857;
          const v16360 = v1858;
          const v16361 = v6012;
          const v16362 = v6054;
          const v16363 = v1861;
          const v16364 = v1862;
          const v16365 = v1863;
          const v16367 = v6046;
          const v16368 = v5653;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2271], secs: v2273, time: v2272, didSend: v979, from: v2270 } = txn1;
  switch (v2271[0]) {
    case 'AdminAPI_claimAdminFee0_194': {
      const v2274 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_setAdminFee0_194': {
      const v2819 = v2271[1];
      return;
      break;
      }
    case 'AdminAPI_updatePrice0_194': {
      const v3364 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnReserve0_194': {
      const v3909 = v2271[1];
      return;
      break;
      }
    case 'Claimant_burnStable0_194': {
      const v4454 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintReserve0_194': {
      const v4999 = v2271[1];
      return;
      break;
      }
    case 'Claimant_mintStable0_194': {
      const v5544 = v2271[1];
      undefined /* setApiDetails */;
      const v5618 = v5544[stdlib.checkedBigNumberify('./index.rsh:289:17:spread', stdlib.UInt_max, '0')];
      const v5619 = stdlib.mul(v5618, v1863);
      const v5620 = stdlib.div(v5619, stdlib.checkedBigNumberify('./index.rsh:294:64:decimal', stdlib.UInt_max, '100'));
      const v5621 = stdlib.add(v5618, v5620);
      const v5653 = stdlib.add(v1871, v5621);
      ;
      const v5654 = v1870[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v5655 = v5654[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v5659 = v5654[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v5660 = v5654[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v5661 = [v5655, v5659, v5660];
      const v5662 = stdlib.Array_set(v1870, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1'), v5661);
      ;
      const v5663 = v5662[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v5664 = v5663[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0')];
      const v5668 = v5663[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '1')];
      const v5669 = v5663[stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '2')];
      const v5670 = [v5664, v5668, v5669];
      const v5671 = stdlib.Array_set(v5662, stdlib.checkedBigNumberify('./index.rsh:129:23:dot', stdlib.UInt_max, '0'), v5670);
      ;
      const v6006 = stdlib.gt(v5618, stdlib.checkedBigNumberify('./index.rsh:296:39:decimal', stdlib.UInt_max, '0'));
      const v6009 = stdlib.mul(v5620, v1857);
      const v6010 = stdlib.div(v6009, stdlib.checkedBigNumberify('./index.rsh:297:96:decimal', stdlib.UInt_max, '100'));
      const v6011 = stdlib.add(v5618, v6010);
      const v6012 = stdlib.add(v1859, v6011);
      const v6013 = stdlib.mul(v1850, v1854);
      const v6014 = stdlib.ge(v6012, v6013);
      const v6015 = v6006 ? v6014 : false;
      const v6016 = v5671[stdlib.checkedBigNumberify('./index.rsh:298:35:application', stdlib.UInt_max, '1')];
      const v6017 = v6016[stdlib.checkedBigNumberify('./index.rsh:298:35:application', stdlib.UInt_max, '0')];
      const v6018 = stdlib.div(v5618, v1856);
      const v6019 = stdlib.ge(v6017, v6018);
      const v6020 = v6015 ? v6019 : false;
      const v6029 = stdlib.mul(v5620, v1848);
      const v6030 = stdlib.div(v6029, stdlib.checkedBigNumberify('./index.rsh:299:148:decimal', stdlib.UInt_max, '100'));
      const v6031 = stdlib.add(v6010, v6030);
      const v6032 = stdlib.eq(v5620, v6031);
      const v6033 = v6020 ? v6032 : false;
      stdlib.assert(v6033, {
        at: './index.rsh:296:28:application',
        fs: ['at ./index.rsh:295:30:application call to [unknown function] (defined at: ./index.rsh:295:30:function exp)'],
        msg: null,
        who: 'Claimant_mintStable'
        });
      const v6040 = stdlib.sub(v6017, v6018);
      const v6043 = v6016[stdlib.checkedBigNumberify('./index.rsh:300:75:application', stdlib.UInt_max, '1')];
      const v6044 = v6016[stdlib.checkedBigNumberify('./index.rsh:300:75:application', stdlib.UInt_max, '2')];
      const v6045 = [v6040, v6043, v6044];
      const v6046 = stdlib.Array_set(v5671, stdlib.checkedBigNumberify('./index.rsh:300:75:application', stdlib.UInt_max, '1'), v6045);
      ;
      const v6054 = stdlib.add(v1860, v6018);
      const v6059 = stdlib.add(v1847, v6030);
      let v6060;
      const v6061 = stdlib.div(v6012, v6054);
      const v6062 = stdlib.gt(v6061, v1856);
      if (v6062) {
        v6060 = v1856;
        }
      else {
        v6060 = v6061;
        }
      const v6064 = stdlib.mul(v6054, v6060);
      const v6065 = true;
      const v6066 = await txn1.getOutput('Claimant_mintStable', 'v6065', ctc3, v6065);
      if (v979) {
        stdlib.protect(ctc10, await interact.out(v5544, v6066), {
          at: './index.rsh:289:18:application',
          fs: ['at ./index.rsh:289:18:application call to [unknown function] (defined at: ./index.rsh:289:18:function exp)', 'at ./index.rsh:340:22:application call to "k" (defined at: ./index.rsh:295:30:function exp)', 'at ./index.rsh:295:30:application call to [unknown function] (defined at: ./index.rsh:295:30:function exp)'],
          msg: 'out',
          who: 'Claimant_mintStable'
          });
        }
      else {
        }
      
      let v6072;
      const v6073 = stdlib.gt(v6012, v6064);
      if (v6073) {
        const v6074 = stdlib.sub(v6012, v6064);
        v6072 = v6074;
        }
      else {
        v6072 = stdlib.checkedBigNumberify('./index.rsh:318:36:decimal', stdlib.UInt_max, '0');
        }
      let v6075;
      if (v6062) {
        v6075 = v1856;
        }
      else {
        v6075 = v6061;
        }
      let v6079;
      if (v6073) {
        const v6081 = stdlib.sub(v6012, v6064);
        v6079 = v6081;
        }
      else {
        v6079 = stdlib.checkedBigNumberify('./index.rsh:318:36:decimal', stdlib.UInt_max, '0');
        }
      let v6082;
      const v6083 = stdlib.le(v6079, stdlib.checkedBigNumberify('./index.rsh:323:34:decimal', stdlib.UInt_max, '0'));
      if (v6083) {
        v6082 = v1852;
        }
      else {
        const v6084 = stdlib.eq(v1858, stdlib.checkedBigNumberify('./index.rsh:326:56:decimal', stdlib.UInt_max, '0'));
        if (v6084) {
          v6082 = v1852;
          }
        else {
          const v6085 = stdlib.div(v6079, v1858);
          const v6086 = stdlib.gt(v1852, v6085);
          if (v6086) {
            v6082 = v1852;
            }
          else {
            v6082 = v6085;
            }
          }
        }
      const v16349 = v6059;
      const v16350 = v1848;
      const v16351 = v6072;
      const v16352 = v6064;
      const v16353 = v1851;
      const v16354 = v1852;
      const v16355 = v1853;
      const v16356 = v1854;
      const v16357 = v6082;
      const v16358 = v6075;
      const v16359 = v1857;
      const v16360 = v1858;
      const v16361 = v6012;
      const v16362 = v6054;
      const v16363 = v1861;
      const v16364 = v1862;
      const v16365 = v1863;
      const v16367 = v6046;
      const v16368 = v5653;
      return;
      
      break;
      }
    }
  
  
  };
export async function AdminAPI_claimAdminFee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_claimAdminFee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_claimAdminFee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _AdminAPI_claimAdminFee4(ctcTop, interact);}
  };
export async function AdminAPI_setAdminFee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_setAdminFee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_setAdminFee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _AdminAPI_setAdminFee4(ctcTop, interact);}
  };
export async function AdminAPI_updatePrice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_updatePrice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_updatePrice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _AdminAPI_updatePrice4(ctcTop, interact);}
  };
export async function Claimant_burnReserve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_burnReserve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_burnReserve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Claimant_burnReserve4(ctcTop, interact);}
  };
export async function Claimant_burnStable(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_burnStable expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_burnStable expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Claimant_burnStable4(ctcTop, interact);}
  };
export async function Claimant_mintReserve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_mintReserve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_mintReserve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Claimant_mintReserve4(ctcTop, interact);}
  };
export async function Claimant_mintStable(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Claimant_mintStable expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Claimant_mintStable expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Claimant_mintStable4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`AdminAPI_claimAdminFee()byte`, `AdminAPI_setAdminFee(uint64,uint64)byte`, `AdminAPI_updatePrice(uint64)byte`, `Claimant_burnReserve(uint64)byte`, `Claimant_burnStable(uint64)byte`, `Claimant_mintReserve(uint64)byte`, `Claimant_mintStable(uint64)byte`],
    pure: [`Viewer_getTokens()(uint64,uint64)`, `Viewer_read()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`],
    sigs: [`AdminAPI_claimAdminFee()byte`, `AdminAPI_setAdminFee(uint64,uint64)byte`, `AdminAPI_updatePrice(uint64)byte`, `Claimant_burnReserve(uint64)byte`, `Claimant_burnStable(uint64)byte`, `Claimant_mintReserve(uint64)byte`, `Claimant_mintStable(uint64)byte`, `Viewer_getTokens()(uint64,uint64)`, `Viewer_read()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`]
    },
  appApproval: `BiAdAAFkBAgDSCAoMDigjQbrhYblCc7A3MMK7bbE1Q3PsKL5DRDX2I/2Ca/z3JAClInhpAbJlYmfAUBQWGBoBQb///////////8BJgMBAQEAACI1ADEYQQ/RKmRJIls1ASEEWzUCNhoAF0lBAYwiNQQjNQZJIQwMQADnSSENDEAASkkhDgxAAC1JIQ8MQAASIQ8SRCo1/yk0/1AhEK9QQgF2IQ4SRDYaATYaAlA1/yg0/1BCAWIhDRJENhoBNf+AAQU0/1AhBK9QQgFMSSERDEAAFiEREkQ2GgE1/4ABAzT/UCEEr1BCAS8hDBJENAElEkQpZChkUEk1A1eICDQDV5gIUDQDV5AIUDQDV0AIUDQDV0gIUDQDV7AIUDQDVzgIUDQDV4AIUDQDVzAIUDQDV6AIUDQDV6gIUDQDV2AIUDQDV1gIUDQDV3gIUDQDV3AIUDQDV2gIUDQDV1AIUDUHQg7BSSESDEAAM0khEwxAABYhExJENhoBNf+AAQI0/1AhBK9QQgCSIRISRDYaATX/gAEENP9QIQSvUEIAfEkhFAxAAD4hFBJENAFJJQxAABklEkQpZChkUEk1A1coCDQDVyAIUDUHQg5bIxJEKWQoZFBJNQNXaAg0A1dgCFA1B0IOQoHxgORVEkQ2GgE1/4ABBjT/UCEEr1BCAB42GgIXNQQ2GgM2GgEXSSMMQArYSSEFDEAKUyEFEkQlNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSkpKSlcAIDX/IQdbNf4hCFs1/SEJWzX8IQpbNfshFVs1+iEGWzX5IRZbNfghF1s19yEYWzX2IRlbNfWBcFs19IF4WzXzgYABWzXygYgBWzXxgZABWzXwgZgBWzXvgaABWzXugagBWzXtgbABWzXsV7giNeuB2gFbNepJNQU16YAENCBl2DTpULA06SJVSSEFDEAHBkkhGgxAA55JIRsMQAG5IRsSRDTpVwEINeg06BdJNec07AskCjXmNOc05gg15TTliA1MNOtXERE15DTrVwARNORXAAg05FcICFA05FcQAVBQNeM041cAEUk14lcACDTiVwgIUDTiVxABUDTjVxERUDXhNOY08gskCjXgNPA05zTgCAg13zThVxERSTXeIls13TTnNPMKNdw05jT7CyQKNds05yINNN80+TT1Cw8QNN003A8QNOY04DTbCBIQRLEisgE03LISJbIQMQCyFDT9shGzNO803Ag12jTfNNoKSTXYNPMNSTXXQQAHNPM12UIABDTYNdk02jTZCzXWgAkAAAAAAAAXsQGwKDUHNN801g1JNdRBAAo03zTWCTXVQgADIjXVNNdBAAc08zXTQgAENNg10zTUQQAKNN801gk10kIAAyI10jTSIg5BAAc09zXRQgAoNPEiEkEABzT3NdFCABo00jTxCjXQNPc00A1BAAc09zXRQgAENNA10TT/NP40/TT8NNsINPs01TTWNPg09zT2NPU00TTTNPI08TTfNNo07jTtNOwyBjThVwARNN003AkWNN5XCAhQNN5XEAFQUDTqNOUIQgquSDTpVwEINeg06BdJNec07AskCjXmNOc05gg15TTliAuWNOtXERE15DTrVwARNORXAAg05FcICFA05FcQAVBQNeM041cAEUk14lcACDTiVwgIUDTiVxABUDTjVxERUDXhNOY08gskCjXgNPA05zTgCAg13zThVwARSTXeIls13TTnNPQKNdw05jT7CyQKNds05yINNN80+TTnCDT4Cw408TTtDBEQNN003A8QNOY04DTbCBIQRLEisgE03LISJbIQMQCyFDT+shGzNO8iEkk12UEABzTzNdpCABk03zTvCkk12DTzDUEABzTzNdpCAAQ02DXaNO802gs12IAJAAAAAAAAFToBsCg1BzTfNNgNSTXWQQAKNN802Ak110IAAyI11zTZQQAHNPM11UIAGTTfNO8KSTXUNPMNQQAHNPM11UIABDTUNdU01kEACjTfNNgJNdRCAAMiNdQ01CIOQQAHNPc100IAKDTxIhJBAAc09zXTQgAaNNQ08Qo10jT3NNINQQAHNPc100IABDTSNdM0/zT+NP00/DTbCDT7NNc02DT4NPc09jT1NNM01TTyNPE03Ag03zTvNO407TTsMgY03TTcCRY03lcICFA03lcQAVA04VcREVA06jTlCEII0EklDEABq0g06VcBCDXoNOgXNec061cRETXmNOtXABE05iJbNOcIFjTmVwgIUDTmVxABUFA15TTnNP2ICbQ05VcAETXkNOc08wtJNeM07AskCjXiNOM04gk14TTiNPILJAo14DTiNPsLJAo13zTnIg006jThDxA04jTgNN8IEhBEsSKyATThsggjshAxALIHszTwNOM04AkJNd407zTnCUk13SISSTXbQQAHNPM13EIAGTTeNN0KSTXaNPMNQQAHNPM13EIABDTaNdw03TTcCzXagAkAAAAAAAASvwGwKDUHNN402g1JNdhBAAo03jTaCTXZQgADIjXZNNtBAAc08zXXQgAZNN403QpJNdY08w1BAAc08zXXQgAENNY11zTYQQAKNN402gk11kIAAyI11jTWIg5BAAc09zXVQgAoNPEiEkEABzT3NdVCABo01jTxCjXUNPc01A1BAAc09zXVQgAENNQ11TT/NP40/TT8NN8INPs02TTaNPg09zT2NPU01TTXNPI08TTeNN007jTtNOwyBjTkVwAINORXCAhQNORXEAFQNOVXERFQNOo04QlCBx9INOlXAQg16DToFzXnNOtXERE15jTrVwARNOZXAAg05lcICFA05lcQAVBQNeU05VcAETXkNOc0/ogIBTTnNPQLSTXjNOwLJApJNeI08gskCjXhNPA04zThCQk14DTjNOIJNd804jT7CyQKNd405yINNOA0+TT1Cw8QNOo03w8QNOI04TTeCBIQRLEisgE037III7IQMQCyB7M07yISSTXcQQAHNPM13UIAGTTgNO8KSTXbNPMNQQAHNPM13UIABDTbNd007zTdCzXbgAkAAAAAAAAQTAGwKDUHNOA02w1JNdlBAAo04DTbCTXaQgADIjXaNNxBAAc08zXYQgAZNOA07wpJNdc08w1BAAc08zXYQgAENNc12DTZQQAKNOA02wk110IAAyI11zTXIg5BAAc09zXWQgAoNPEiEkEABzT3NdZCABo01zTxCjXVNPc01Q1BAAc09zXWQgAENNU11jT/NP40/TT8NN4INPs02jTbNPg09zT2NPU01jTYNPI08TTnCTTgNO807jTtNOwyBjTkIls05wgWNORXCAhQNORXEAFQNOVXERFQNOo03wlCBW9JIwxAAftJgQIMQAFJSDTpVwEINeg061cRETXnNOtXABE051cACDTnVwgIUDTnVxABUFA15jTmVwARNeU06BdJNeQiDTEANP8SEESACQAAAAAAAA3IAbAoNQc07yISSTXiQQAHNOQ140IAGTTwNO8KSTXhNOQNQQAHNOQ140IABDThNeM04zTvCzXhNPA04Q1JNd9BAAo08DThCTXgQgADIjXgNOJBAAc05DXeQgAZNPA07wpJNd005A1BAAc05DXeQgAENN013jTfQQAKNPA04Qk13UIAAyI13TTdIg5BAAc09zXcQgAoNPEiEkEABzT3NdxCABo03TTxCjXbNPc02w1BAAc09zXcQgAENNs13DT/NP40/TT8NPs04DThNPg09zTkNPU03DTeNPI08TTwNO805DTtNOwyBjTlVwAINOVXCAhQNOVXEAFQNOZXERFQNOpCBBlINOlXARA16DTrVxERNec061cAETTnVwAINOdXCAhQNOdXEAFQUDXmNOZXABE15TToIls15DToIQRbNeM05DTjCCQSRLEisgE0/LIII7IQNP+yB7OACQAAAAAAAAuZAbAoNQc0/zT+NP0iNOQ0+jT5NPg09zT2NPU09DTzNOM08TTwNO807jTtNOwyBjTlVwAINOVXCAhQNOVXEAFQNOZXERFQNOo0/AlCA25INOtXERE16DTrVwARNOhXAAg06FcICFA06FcQAVBQNec051cAETXmMQA0/xJEsSKyATT8sggjshA0/7IHs4AJAAAAAAAACWgBsCg1BzT/NP40/SI0+zT6NPk0+DT3NPY09TT0NPM08jTxNPA07zTuNO007DIGNOZXAAg05lcICFA05lcQAVA051cREVA06jT8CUIC2SMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A0lJVwAgNf8hBls1/iEWWzX9gASai5F0sDT/MQASRDT/NAMhGFs0AyEZWyI0AyEIWyIiNAMhFVs0/TT+NAMhCls0/TT+NAMhCVsiIiI0/jQDIRdbNAMhB1syBjQDV3AiIkICW0ghC4gDXiI0ARJENARJIhJMNAISEURJNQVJSkpKSiJbNf8hBFs1/iEQWzX9gRhbNfwhB1s1+yEIWzX6IQlbNfkhCls1+FdAuDX3V/i4NfaABOD4gxs0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3UDT2ULCBEa9JNfVJUDX0NP40/QgkEkQ09yEGW0k18yINRDT2IQZbSTXyIg1ENPMhHBJENPIhHBJEIQuIAq+xIrIBIQWyEDTzsiI09yJbsiM091dQCLIlNPdXKCCyJjT3V1hgsic091cIILIoMgqyKbO0PDXxgAgAAAAAAAAG6TTxFlCwNPE18DT0VwARNe808xY071cICFA071cQAVA09FcREVBJNe5XABFJNe1XAAg08xZQNO1XEAFQNO5XERFQSTXsVwARSTXrVwAINOtXCAhQKVA07FcREVA16iELiAIMsSKyASEFshA08rIiNPYiW7IjNPZXUAiyJTT2VyggsiY09ldYYLInNPZXCCCyKDIKsimztDw16YAIAAAAAAAABw006RZQsDTpSTXoNPAWIlsTRDTqVxERNec06lcAETTyFjTnVwgIUDTnVxABUFBJNeZXERE15TTmVwARNOVXAAg08hZQNOVXEAFQUEk15FcRETXjNORXABE041cACDTjVwgIUClQUEk14lcRESJbNPISRDTiVwARIls08xJEMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPgWUDTwFlA06BZQNOJQKUsBVwB/ZyhLAVd/E2dIIzUBMgY1AkIAtzX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNew16zXqSTXpNOoWUDTrFlA07BZQNO0WUDTuFlA07xZQNPAWUDTxFlA08hZQNPMWUDT0FlA09RZQNPYWUDT3FlA0+BZQNPkWUDT6FlA0+xZQNPwWUDT+UDT/FlApSwFXAH9nKEsBV39jZ0glNQEyBjUCQgAcMRkhGhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 226,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:107:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:579:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:129:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Admin": Admin,
  "AdminAPI_claimAdminFee": AdminAPI_claimAdminFee,
  "AdminAPI_setAdminFee": AdminAPI_setAdminFee,
  "AdminAPI_updatePrice": AdminAPI_updatePrice,
  "Claimant_burnReserve": Claimant_burnReserve,
  "Claimant_burnStable": Claimant_burnStable,
  "Claimant_mintReserve": Claimant_mintReserve,
  "Claimant_mintStable": Claimant_mintStable
  };
export const _APIs = {
  AdminAPI: {
    claimAdminFee: AdminAPI_claimAdminFee,
    setAdminFee: AdminAPI_setAdminFee,
    updatePrice: AdminAPI_updatePrice
    },
  Claimant: {
    burnReserve: Claimant_burnReserve,
    burnStable: Claimant_burnStable,
    mintReserve: Claimant_mintReserve,
    mintStable: Claimant_mintStable
    }
  };
