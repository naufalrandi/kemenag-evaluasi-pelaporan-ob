const a3_0x1d2cda=a3_0x3318;(function(_0x37a884,_0x426ef4){const _0x47bb5d=a3_0x3318,_0xa9a9ed=_0x37a884();while(!![]){try{const _0x2f7386=parseInt(_0x47bb5d(0x111))/0x1*(-parseInt(_0x47bb5d(0xa8))/0x2)+-parseInt(_0x47bb5d(0xab))/0x3+-parseInt(_0x47bb5d(0xcc))/0x4*(-parseInt(_0x47bb5d(0xc0))/0x5)+parseInt(_0x47bb5d(0xc5))/0x6+parseInt(_0x47bb5d(0xc9))/0x7+-parseInt(_0x47bb5d(0x97))/0x8+parseInt(_0x47bb5d(0xe4))/0x9*(parseInt(_0x47bb5d(0xb7))/0xa);if(_0x2f7386===_0x426ef4)break;else _0xa9a9ed['push'](_0xa9a9ed['shift']());}catch(_0x2080ae){_0xa9a9ed['push'](_0xa9a9ed['shift']());}}}(a3_0x17f7,0x505e4));function a3_0x17f7(){const _0x4ec77f=['uang_penginapan_data','status_ketua_tgl','/eval_pelaporan/form-bukti-perjalanan/','status_bendahara','/kepegawaian/data-tenaga-audit/','COUNT','nik','findAndCountAll','filter','findAll','col','Pengembalian\x20kelebihan\x20uang\x20muka\x20ke\x20negara','surat_tugas_id','TenagaAudit','push','/pengawasan_internal/surat-tugas?get=all&search=','TemplatePengeluaran','Anggota','nama','/pdf_tte/sign-ttd','SuratPerjalananDinas','/pdf_tte/generate','createdAt','update','../helpers/custom','1425440LVeSzx','error','history_revisi','transportasi_data','bank','role_id','Menghapus\x20Form\x20Bukti\x20Perjalanan\x20Dinas','Ditolak','/pengawasan_internal/surat-tugas/','bukti_perjalanan','env','/kepegawaian/data-tenaga-audit?get=all&search=','nomor_surat','status_ppk','url_pdf','user','status_evalap','2486lrLfnU','data\x20tidak\x20ditemukan','ketua_id','1778958nSEgvY','length','ppk_id','status','FormDpr','evalap_id','dataValues','uraian','Verifikasi\x20dan\x20Pelaporan','selesai','create','terjadi\x20error','70RnMOfv','Form\x20Bukti\x20Perjalanan\x20Dinas','form_bukti_perjalanan','updated','body','Pending','status_ppk_tgl','ketua','id_tte','34670bzqZOT','Kantor','bendahara_id','BuktiPerjalanan','pembuat_komitmen_id','740604NyWRXd','params','evalap','dibayar_oleh','1884729jqweRS','YYYYMMDDHHmmss','format','44FbbLod','and','findOne','SuratTugas','send','sisa_pengembalian','contains','../models/kepegawaian/index','Uraian','desc','Ketua\x20Tim','Bearer\x20','uang_muka_transportasi','destroy','ITJEN\x20KEMENAG','Disetujui','token','axios','all','get','../models/keuangan/index','Menunggu','Pengembalian','mak','1441467lTiwRH','ceil','transfer','map','Tidak\x20menggunakan\x20hotel\x20(30%\x20biaya\x20hotel)','detail','Berhasil','pegawai_id','role_name','pegawai','status_ketua','GATEWAYE_URL','find','list_pengeluaran','kepada','tanpa_hotel','DKI','YYYY-MM-DD\x20HH:mm:ss','total_bukti_perjalanan','../models/index','RevisiBuktiPerjalanan','reduce','bendahara','ppk','post','jabatan','status_bendahara_tgl','log','../models/pengawasan-internal/index','/data-tenaga-audit/','moment','message','surat_tugas','&arrid=','Verifikasi\x20Perjalanan\x20Dinas','old','sequelize','Anda\x20belum\x20terdaftar\x20TTE\x20/\x20Passphrase\x20anda\x20salah','FormPembayaranPenagihan','transport\x20-\x20jakarta','../models','Trasfer','data','total','jumlah_dibayarkan','394tRBbYQ','Menambah\x20Form\x20Bukti\x20Perjalanan\x20Dinas','../helpers/jwt','status_evalap_tgl','query','Melakukan\x20Revisi\x20Form\x20Bukti\x20Perjalanan\x20Dinas'];a3_0x17f7=function(){return _0x4ec77f;};return a3_0x17f7();}const {Op,where}=require(a3_0x1d2cda(0x108)),model=require(a3_0x1d2cda(0xf7)),modelPengawasan=require(a3_0x1d2cda(0x100)),modelKepegawaian=require(a3_0x1d2cda(0xd3)),modelKeuangan=require(a3_0x1d2cda(0xe0)),{default:axios}=require(a3_0x1d2cda(0xdd)),{sendNotif,checkNik,getSuratTugas}=require(a3_0x1d2cda(0x12f)),moment=require(a3_0x1d2cda(0x102)),{encodeJwt,decodeJwt}=require(a3_0x1d2cda(0x113)),{PegawaiBendahara}=require(a3_0x1d2cda(0x10c)),sequelize=require(a3_0x1d2cda(0x108)),getPaginationTable=(_0xd11a03,_0x505612)=>{const _0xab3598=a3_0x1d2cda,_0x355b3f=_0x505612?+_0x505612:0xa,_0x485292=_0xd11a03?Math[_0xab3598(0xe5)](_0xd11a03-0x1)*_0x355b3f:0x0;return{'limit':_0x355b3f,'offset':_0x485292};},transformRevisiPerjalanan=async _0x49fb20=>{const _0x14c8b4=a3_0x1d2cda,_0xd12150=await decodeJwt(_0x49fb20['old']),_0x153ba2=await decodeJwt(_0x49fb20['updated']),_0x26c74e={};for(const _0x59b211 in _0xd12150){_0x153ba2[_0x59b211]&&_0xd12150[_0x59b211]&&_0xd12150[_0x59b211]!==_0x153ba2[_0x59b211]&&(_0x26c74e[_0x59b211]={'old':_0xd12150[_0x59b211],'updated':_0x153ba2[_0x59b211]});}return{..._0x49fb20 instanceof model[_0x14c8b4(0xf8)]?_0x49fb20[_0x14c8b4(0xb1)]:_0x49fb20,'old':_0xd12150,'updated':_0x153ba2,'changes':_0x26c74e};},pdf_tte=async(_0xb1cab0,_0x4f40ad,_0x505963,_0x24de87,_0x3a9f7d=![])=>{const _0x587401=a3_0x1d2cda;try{const _0x26c631=await axios[_0x587401(0xdf)](process['env'][_0x587401(0xef)]+_0x587401(0x119)+_0xb1cab0,{'headers':{'Authorization':_0x587401(0xd7)+_0x4f40ad[_0x587401(0xdc)]}});console[_0x587401(0xff)](_0x26c631[_0x587401(0x10e)]['data']);var _0x526ebb=_0x26c631[_0x587401(0x10e)][_0x587401(0x10e)];console[_0x587401(0xff)](_0x526ebb);var _0x2f1858=_0x526ebb[_0x587401(0xa5)],_0x207515=_0x526ebb[_0x587401(0xbf)];_0x3a9f7d&&(_0x2f1858=null,_0x207515=null);if(!_0x2f1858){const _0x5b6102=await axios[_0x587401(0xfc)](process['env'][_0x587401(0xef)]+_0x587401(0x12c),{'folder':'verif-perjadin','filename':_0x526ebb[_0x587401(0x104)][_0x587401(0xa3)]+'-'+moment()[_0x587401(0xcb)](_0x587401(0xca)),'data':_0x526ebb},{'headers':{'Authorization':_0x587401(0xd7)+_0x4f40ad[_0x587401(0xdc)]}});_0x2f1858=_0x5b6102[_0x587401(0x10e)][_0x587401(0x10e)];}if(!_0x207515){const _0x573740=await axios[_0x587401(0xfc)](process[_0x587401(0xa1)][_0x587401(0xef)]+'/pdf_tte/upload-dokumen-ttd',{'filename':_0x2f1858,'regarding':_0x587401(0x106),'type':_0x587401(0x106),'paper_type':'P'},{'headers':{'Authorization':'Bearer\x20'+_0x4f40ad[_0x587401(0xdc)]}});_0x207515=_0x573740['data']['data']['id'];}let _0x192841=null;if(_0x4f40ad[_0x587401(0xa6)][_0x587401(0xeb)]){const _0x3905d0=await axios[_0x587401(0xdf)](process[_0x587401(0xa1)]['KEPEGAWAIAN_URL']+_0x587401(0x101)+_0x4f40ad[_0x587401(0xa6)][_0x587401(0xeb)],{'headers':{'Authorization':_0x587401(0xd7)+_0x4f40ad[_0x587401(0xdc)]}});_0x192841=_0x3905d0[_0x587401(0x10e)][_0x587401(0x10e)];}const _0x4fd80a=await axios['post'](process['env'][_0x587401(0xef)]+_0x587401(0x12a),{'filename':_0x2f1858,'nik':_0x192841[_0x587401(0x11d)],'passphrase':_0x505963['passphrase'],'document_id':_0x207515,'anchor':_0x24de87,'is_final':'0'},{'headers':{'Authorization':_0x587401(0xd7)+_0x4f40ad[_0x587401(0xdc)]}});return await Promise[_0x587401(0xde)]([model[_0x587401(0xc3)][_0x587401(0x12e)]({'url_pdf':_0x2f1858,'url_pdf_tte':_0x2f1858,'id_tte':_0x207515},{'where':{'id':_0xb1cab0}})]),console[_0x587401(0xff)]({'url_pdf':_0x2f1858,'url_pdf_tte':_0x2f1858,'id_tte':_0x207515}),!![];}catch(_0x2f6f7c){return console[_0x587401(0xff)](_0x2f6f7c),![];}},getPagingData=(_0xef9ee5,_0x3c547a,_0x59cf5e)=>{const _0x2c877b=a3_0x1d2cda,{count:_0x2c42e4,rows:_0x3abf0c}=_0xef9ee5,_0x2d4645=_0x3c547a?+_0x3c547a:0x0,_0x3c1068=Math[_0x2c877b(0xe5)](_0x2c42e4/_0x59cf5e);return{'totalItems':_0x2c42e4,'data':_0x3abf0c,'totalPages':_0x3c1068,'currentPage':_0x2d4645};},getPagination=(_0x2ca2ab,_0x2c5b93)=>{const _0x4709e7=_0x2c5b93?+_0x2c5b93:0xa,_0x57ff92=_0x2ca2ab?Math['ceil'](_0x2ca2ab-0x1)*_0x4709e7:0x0;return{'limit':_0x4709e7,'offset':_0x57ff92};};function a3_0x3318(_0x2182a3,_0x545b78){const _0x17f7f0=a3_0x17f7();return a3_0x3318=function(_0x33185e,_0x3d0a7e){_0x33185e=_0x33185e-0x97;let _0x38f675=_0x17f7f0[_0x33185e];return _0x38f675;},a3_0x3318(_0x2182a3,_0x545b78);}module['exports']={async 'index'(_0x4750ea,_0x5d7a02){const _0x355a5c=a3_0x1d2cda;try{const {page:page=0x1,size:size=0xa,sortby:sortby=_0x355a5c(0x12d),orderby:orderby=_0x355a5c(0xd5),search:_0x532686,byuser:_0x50cdd0,step:_0x5744cd}=_0x4750ea['query'];let _0x1f3b6b={};_0x5744cd==_0x355a5c(0xbe)&&(_0x1f3b6b={'status_ketua':{[Op['or']]:[_0x355a5c(0xe1),_0x355a5c(0x9e),null]}});_0x5744cd=='evalap'&&(_0x1f3b6b={[Op[_0x355a5c(0xcd)]]:[{'status_ketua':_0x355a5c(0xdb)},{'status_evalap':{[Op['or']]:['Menunggu',_0x355a5c(0x9e),null]}}]});_0x5744cd==_0x355a5c(0xfb)&&(_0x1f3b6b={[Op[_0x355a5c(0xcd)]]:[{'status_ketua':_0x355a5c(0xdb)},{'status_evalap':'Disetujui'},{'status_ppk':{[Op['or']]:[_0x355a5c(0xe1),_0x355a5c(0x9e),null]}}]});_0x5744cd==_0x355a5c(0xfa)&&(_0x1f3b6b={[Op[_0x355a5c(0xcd)]]:[{'status_ketua':'Disetujui'},{'status_evalap':'Disetujui'},{'status_ppk':_0x355a5c(0xdb)},{'status_bendahara':{[Op['or']]:[_0x355a5c(0xe1),_0x355a5c(0x9e),null]}}]});_0x5744cd==_0x355a5c(0xb4)&&(_0x1f3b6b={[Op['and']]:[{'status_ketua':_0x355a5c(0xdb)},{'status_evalap':_0x355a5c(0xdb)},{'status_ppk':'Disetujui'},{'status_bendahara':'Disetujui'}]});let _0x55ffd4={};if(_0x532686){const _0x5d41a8=await model['BuktiPerjalanan'][_0x355a5c(0x120)]({'attributes':[_0x355a5c(0x123)],'group':[_0x355a5c(0x123)]});let _0x3e0fc4=[];for(let _0x71fca6=0x0;_0x71fca6<_0x5d41a8[_0x355a5c(0xac)];_0x71fca6++){const _0x206a87=_0x5d41a8[_0x71fca6][_0x355a5c(0xb1)];_0x3e0fc4[_0x355a5c(0x125)](_0x206a87[_0x355a5c(0x123)]);}const _0x28c1f0=await model[_0x355a5c(0xc3)][_0x355a5c(0x120)]({'attributes':[_0x355a5c(0xeb)],'group':[_0x355a5c(0xeb)]});let _0x333e42=[];for(let _0x2eef33=0x0;_0x2eef33<_0x28c1f0[_0x355a5c(0xac)];_0x2eef33++){const _0x39447d=_0x28c1f0[_0x2eef33][_0x355a5c(0xb1)];_0x333e42['push'](_0x39447d[_0x355a5c(0xeb)]);}const [_0x34ff69,_0x670250]=await Promise[_0x355a5c(0xde)]([axios[_0x355a5c(0xdf)](process[_0x355a5c(0xa1)][_0x355a5c(0xef)]+_0x355a5c(0x126)+_0x532686+_0x355a5c(0x105)+_0x3e0fc4,{'headers':{'Authorization':'Bearer\x20'+_0x4750ea[_0x355a5c(0xdc)]}}),axios[_0x355a5c(0xdf)](process[_0x355a5c(0xa1)]['GATEWAYE_URL']+_0x355a5c(0xa2)+_0x532686+_0x355a5c(0x105)+_0x333e42,{'headers':{'Authorization':'Bearer\x20'+_0x4750ea[_0x355a5c(0xdc)]}})]),_0xe0fc10=_0x34ff69['data'][_0x355a5c(0x10e)],_0x4356b3=_0x670250[_0x355a5c(0x10e)][_0x355a5c(0x10e)];let _0x442310=[];for(let _0x384176=0x0;_0x384176<_0xe0fc10[_0x355a5c(0xac)];_0x384176++){const _0x246685=_0xe0fc10[_0x384176];_0x442310[_0x355a5c(0x125)](_0x246685['id']);}_0x442310['length']>0x0&&(_0x1f3b6b[_0x355a5c(0x123)]={[Op['in']]:_0x442310});let _0x46b747=[];for(let _0x45b8ce=0x0;_0x45b8ce<_0x4356b3[_0x355a5c(0xac)];_0x45b8ce++){const _0x546006=_0x4356b3[_0x45b8ce];_0x46b747[_0x355a5c(0x125)](_0x546006['id']);}_0x46b747[_0x355a5c(0xac)]>0x0&&(_0x1f3b6b[_0x355a5c(0xeb)]={[Op['in']]:_0x46b747});}_0x50cdd0&&(_0x1f3b6b[_0x355a5c(0xeb)]=_0x4750ea[_0x355a5c(0xa6)][_0x355a5c(0xeb)]);if(_0x4750ea[_0x355a5c(0xa6)][_0x355a5c(0x9c)]!==0x1&&_0x4750ea['query'][_0x355a5c(0xdf)]!==_0x355a5c(0xde)){if(_0x50cdd0)_0x1f3b6b[_0x355a5c(0xeb)]=_0x4750ea[_0x355a5c(0xa6)][_0x355a5c(0xeb)];else{let _0x981062=[];const _0x1ac80d=await model[_0x355a5c(0xc3)][_0x355a5c(0x120)]({'raw':!![]});for(let _0x10b164=0x0;_0x10b164<_0x1ac80d[_0x355a5c(0xac)];_0x10b164++){const _0x56654b=_0x1ac80d[_0x10b164];if(_0x56654b[_0x355a5c(0xee)]!==_0x355a5c(0xdb)||_0x56654b['status_ketua']===_0x355a5c(0xdb))try{const _0x30f9c8=await modelPengawasan[_0x355a5c(0xcf)]['findOne']({'where':{'id':_0x56654b[_0x355a5c(0x123)],'kepada':{[Op['contains']]:[{'pegawai_id':_0x4750ea[_0x355a5c(0xa6)][_0x355a5c(0xeb)]}]}}});_0x30f9c8&&_0x30f9c8['id']===_0x56654b['surat_tugas_id']&&_0x981062['push'](_0x56654b['id']);}catch(_0x1e94de){console[_0x355a5c(0xff)](_0x1e94de);}else{if(_0x56654b[_0x355a5c(0xee)]===_0x355a5c(0xdb)&&_0x4750ea['user'][_0x355a5c(0xec)]===_0x355a5c(0xb3)&&_0x56654b['status_evalap']!=='Disetujui')_0x981062['push'](_0x56654b['id']);else{if(_0x56654b[_0x355a5c(0xee)]==='Disetujui'&&_0x56654b[_0x355a5c(0xa7)]===_0x355a5c(0xdb)&&_0x56654b['status_ppk']!==_0x355a5c(0xdb))try{const _0x3bc950=await modelPengawasan[_0x355a5c(0xcf)]['findOne']({'where':{'id':_0x56654b[_0x355a5c(0x123)]}});_0x3bc950&&_0x3bc950[_0x355a5c(0xad)]===_0x4750ea[_0x355a5c(0xa6)][_0x355a5c(0xeb)]&&_0x981062[_0x355a5c(0x125)](_0x56654b['id']);}catch(_0x262963){console[_0x355a5c(0xff)](_0x262963);}}}_0x1f3b6b[Op['or']]=[{'pegawai_id':_0x4750ea[_0x355a5c(0xa6)][_0x355a5c(0xeb)]},{'id':{[Op['in']]:_0x981062}}];}}}const _0x20fbfa={'where':_0x1f3b6b,'order':[[sortby,orderby]],'limit':parseInt(size),'offset':(parseInt(page)-0x1)*parseInt(size)},{count:_0x13c36f,rows:_0x3ac526}=await model[_0x355a5c(0xc3)][_0x355a5c(0x11e)]({..._0x20fbfa,'raw':!![]}),_0xe4c557=await Promise[_0x355a5c(0xde)](_0x3ac526[_0x355a5c(0xe7)](async _0x3041a8=>{const _0x153a16=_0x355a5c;_0x3041a8['pegawai']=null;if(_0x3041a8[_0x153a16(0xeb)])try{const _0x2d2a2c=await modelKepegawaian['TenagaAudit'][_0x153a16(0xce)]({'where':{'id':_0x3041a8[_0x153a16(0xeb)]}});_0x3041a8[_0x153a16(0xed)]=_0x2d2a2c;}catch(_0x26e800){console['log'](_0x26e800);}_0x3041a8[_0x153a16(0x104)]=null;if(_0x3041a8['surat_tugas_id'])try{const _0x2cb85d=await modelPengawasan[_0x153a16(0xcf)]['findOne']({'where':{'id':_0x3041a8[_0x153a16(0x123)]}});_0x3041a8[_0x153a16(0x104)]=_0x2cb85d;}catch(_0x321b55){}return _0x3041a8[_0x153a16(0x11a)]==_0x153a16(0xdb)&&_0x3041a8[_0x153a16(0xa4)]==null&&_0x3041a8[_0x153a16(0x114)]!=null&&(_0x3041a8[_0x153a16(0xa4)]=_0x153a16(0xdb),await model['BuktiPerjalanan']['update']({'status_ppk':_0x153a16(0xdb)},{'where':{'id':_0x3041a8['id']}})),_0x3041a8;})),_0x8cc2b1=getPagingData({'count':_0x13c36f,'rows':_0xe4c557},page,parseInt(size));_0x5d7a02[_0x355a5c(0xd0)]({'status':!![],..._0x8cc2b1});}catch(_0x6e326){console['log'](_0x6e326),_0x5d7a02[_0x355a5c(0xd0)]({'status':![],'message':'terjadi\x20error'});}},async 'add'(_0xc30dbe,_0x5a19a2){const _0x5134f7=a3_0x1d2cda;try{const _0x5f4e61={..._0xc30dbe['body']};(_0x5f4e61[_0x5134f7(0xeb)]===''||!_0x5f4e61['pegawai_id'])&&(_0x5f4e61[_0x5134f7(0xeb)]=_0xc30dbe[_0x5134f7(0xa6)]['pegawai_id']);const _0xe065c3=await model[_0x5134f7(0xc3)][_0x5134f7(0xce)]({'where':{'surat_tugas_id':_0x5f4e61[_0x5134f7(0x123)],'pegawai_id':_0x5f4e61[_0x5134f7(0xeb)]}});if(_0xe065c3)return _0x5a19a2[_0x5134f7(0xd0)]({'status':![],'message':'Bukti\x20perjalanan\x20dengan\x20ST\x20dan\x20pegawai\x20Sudah\x20Ada'});else{const _0x4ca953=await model['BuktiPerjalanan'][_0x5134f7(0xb5)](_0x5f4e61);return await sendNotif(_0x5134f7(0xb9),_0x4ca953['id'],_0xc30dbe[_0x5134f7(0xa6)][_0x5134f7(0xeb)],_0x5134f7(0xb8),_0x5134f7(0x112),_0xc30dbe[_0x5134f7(0xdc)]),_0x5a19a2[_0x5134f7(0xd0)]({'status':!![],'data':_0x4ca953});}}catch(_0x4a92ac){return console[_0x5134f7(0x98)](_0x4a92ac),_0x5a19a2['status'](0x190)[_0x5134f7(0xd0)]({'status':![],'message':'terjadi\x20error'});}},async 'detail'(_0x118e80,_0x3a1f8e){const _0x251d89=a3_0x1d2cda;try{const {id:_0x2a4e65}=_0x118e80[_0x251d89(0xc6)],_0x5284e9=await model['BuktiPerjalanan'][_0x251d89(0xce)]({'where':{'id':_0x2a4e65},'include':[{'model':model['RevisiBuktiPerjalanan'],'as':_0x251d89(0x99)}]});let _0x13c4e5=_0x5284e9?_0x5284e9['dataValues']:{};!_0x13c4e5&&_0x3a1f8e[_0x251d89(0xd0)]({'status':![],'message':_0x251d89(0xa9)});if(_0x13c4e5[_0x251d89(0x9a)]){const _0x4ab1f1=_0x13c4e5[_0x251d89(0x9a)][_0x251d89(0x11f)](_0x5e4011=>_0x5e4011['dibayar_oleh']===_0x251d89(0xc1))[_0x251d89(0xf9)]((_0x154d3a,_0x5f0eba)=>_0x154d3a+_0x5f0eba[_0x251d89(0x10f)],0x0);_0x13c4e5['uang_muka_transportasi']=_0x4ab1f1;}_0x13c4e5[_0x251d89(0x104)]=null;if(_0x13c4e5[_0x251d89(0x123)])try{_0x13c4e5[_0x251d89(0x104)]=await getSuratTugas(_0x13c4e5[_0x251d89(0x123)]),_0x13c4e5[_0x251d89(0xad)]=_0x13c4e5[_0x251d89(0x104)][_0x251d89(0xad)];}catch(_0x5024e7){}_0x13c4e5[_0x251d89(0xed)]=null;if(_0x13c4e5[_0x251d89(0xeb)])try{const _0x3916f2=await modelKepegawaian[_0x251d89(0x124)]['findOne']({'where':{'id':_0x13c4e5['pegawai_id']}});_0x13c4e5[_0x251d89(0xed)]=_0x3916f2;}catch(_0x1ead2d){}_0x13c4e5[_0x251d89(0xbe)]=null;if(_0x13c4e5[_0x251d89(0xaa)])try{const _0x445dca=await modelKepegawaian['TenagaAudit']['findOne']({'where':{'id':_0x13c4e5[_0x251d89(0xaa)]}});_0x13c4e5[_0x251d89(0xbe)]=_0x445dca;}catch(_0x4ce41a){}_0x13c4e5['evalap']=null;if(_0x13c4e5[_0x251d89(0xb0)])try{const _0x410669=await modelKepegawaian[_0x251d89(0x124)]['findOne']({'where':{'id':_0x13c4e5[_0x251d89(0xb0)]}});_0x13c4e5[_0x251d89(0xc7)]=_0x410669;}catch(_0x2ec794){}_0x13c4e5[_0x251d89(0xfb)]=null;if(_0x13c4e5[_0x251d89(0xad)])try{const _0x54e7fc=await modelKepegawaian[_0x251d89(0x124)][_0x251d89(0xce)]({'where':{'id':_0x13c4e5[_0x251d89(0xad)]}});_0x13c4e5[_0x251d89(0xfb)]=_0x54e7fc;}catch(_0x39605e){}let _0x24b2e0=await PegawaiBendahara['findOne']({'where':{[Op[_0x251d89(0xcd)]]:[{'keterangan':'Form\x20Bukti\x20Perjalanan'},{'utama':!![]}]}});_0x13c4e5[_0x251d89(0xfa)]=null;if(_0x24b2e0)try{let _0x45c5d1=_0x24b2e0[_0x251d89(0xb1)];_0x45c5d1[_0x251d89(0xed)]=null;const _0xcd4465=await modelKepegawaian[_0x251d89(0x124)][_0x251d89(0xce)]({'where':{'id':_0x24b2e0['pegawai_id']}});_0x45c5d1['pegawai']=_0xcd4465,_0x13c4e5[_0x251d89(0xfa)]=_0x24b2e0,_0x13c4e5['bendahara_id']=_0x24b2e0[_0x251d89(0xeb)];}catch(_0x13b8ac){}_0x13c4e5['history_revisi']=await Promise[_0x251d89(0xde)](_0x13c4e5['history_revisi'][_0x251d89(0xe7)](transformRevisiPerjalanan));const _0x20f4e8=await model[_0x251d89(0xf8)][_0x251d89(0xce)]({'where':{'bukti_perjalanan_id':_0x2a4e65}});return _0x20f4e8&&(_0x20f4e8[_0x251d89(0xb1)][_0x251d89(0x107)]=await decodeJwt(_0x20f4e8['dataValues']['old']),_0x20f4e8['dataValues']['updated']=await decodeJwt(_0x20f4e8[_0x251d89(0xb1)][_0x251d89(0xba)]),_0x13c4e5={..._0x13c4e5,..._0x20f4e8[_0x251d89(0xb1)][_0x251d89(0xba)]},_0x13c4e5['revisi']=_0x20f4e8[_0x251d89(0xb1)]),(!_0x13c4e5[_0x251d89(0xd1)]||parseInt(_0x13c4e5[_0x251d89(0xd1)]||0x0)==0x0)&&(_0x13c4e5[_0x251d89(0xd1)]=parseInt(_0x13c4e5[_0x251d89(0x110)]||0x0)-(parseInt(_0x13c4e5['uang_muka']||0x0)+parseInt(_0x13c4e5[_0x251d89(0xd8)]||0x0))),_0x13c4e5[_0x251d89(0x11a)]==_0x251d89(0xdb)&&_0x13c4e5[_0x251d89(0xa4)]==null&&_0x13c4e5[_0x251d89(0x114)]!=null&&(_0x13c4e5[_0x251d89(0xa4)]=_0x251d89(0xdb)),_0x3a1f8e[_0x251d89(0xae)](0xc8)[_0x251d89(0xd0)]({'status':!![],'data':_0x13c4e5});}catch(_0x2c32c6){return console['log'](_0x2c32c6),_0x3a1f8e[_0x251d89(0xae)](0x1f4)['send']({'status':![],'message':'terjadi\x20error'});}},async 'detail_cek'(_0x4ce0da,_0x39eb44){const _0x150b7e=a3_0x1d2cda;try{const _0x3308d7=await model[_0x150b7e(0xc3)][_0x150b7e(0xce)]({'where':{'pegawai_id':_0x4ce0da[_0x150b7e(0xbb)][_0x150b7e(0xeb)],'surat_tugas_id':_0x4ce0da['body'][_0x150b7e(0x123)]}});_0x39eb44[_0x150b7e(0xd0)]({'status':!![],'data':_0x3308d7});}catch(_0x3331f2){console[_0x150b7e(0xff)](_0x3331f2),_0x39eb44[_0x150b7e(0xae)](0x190)[_0x150b7e(0xd0)]({'status':![],'message':_0x150b7e(0xb6)});}},async 'detail_perjadin_dpr'(_0x43f1bd,_0x384b1b){const _0x37b077=a3_0x1d2cda;try{const _0x192e31=await model[_0x37b077(0xc3)][_0x37b077(0xce)]({'where':{'id':_0x43f1bd['params']['id']}}),_0x1792a3=_0x192e31?_0x192e31[_0x37b077(0xb1)]:{},[_0x2f93b2,_0x5c2470]=await Promise[_0x37b077(0xde)]([_0x1792a3['pegawai_id']?modelKepegawaian[_0x37b077(0x124)][_0x37b077(0xce)]({'where':{'id':_0x1792a3[_0x37b077(0xeb)]}}):null,_0x1792a3['surat_tugas_id']?axios[_0x37b077(0xdf)](process['env']['GATEWAYE_URL']+'/pengawasan_internal/surat-tugas/'+_0x192e31[_0x37b077(0x123)],{'headers':{'Authorization':'Bearer\x20'+_0x43f1bd['token']}}):null]);_0x1792a3[_0x37b077(0xed)]=_0x2f93b2?_0x2f93b2:{},_0x1792a3[_0x37b077(0x104)]=_0x5c2470?_0x5c2470[_0x37b077(0x10e)][_0x37b077(0x10e)]:{};const _0x43d32c=await model['FormDpr'][_0x37b077(0xce)]({'where':{'surat_tugas_id':_0x1792a3['surat_tugas_id'],'pegawai_id':_0x43f1bd[_0x37b077(0xa6)]['pegawai_id']}});let _0xfb3fe3=_0x43d32c;if(_0x43d32c){_0xfb3fe3=_0x43d32c['dataValues'];const [_0x377b6f]=await Promise[_0x37b077(0xde)]([_0xfb3fe3[_0x37b077(0xc4)]?modelKepegawaian['TenagaAudit']['findOne']({'where':{'id':_0xfb3fe3[_0x37b077(0xc4)]}}):null]),_0x453026=await Promise[_0x37b077(0xde)](_0xfb3fe3[_0x37b077(0xf1)][_0x37b077(0xe7)](async _0xfae464=>{const _0xb776ff=_0x37b077,_0x148664=_0xfae464['uraian']?_0xfae464[_0xb776ff(0xb2)]:_0xfae464[_0xb776ff(0xd4)];var _0x41e309=await model[_0xb776ff(0x127)][_0xb776ff(0xce)]({'where':{'detail':_0x148664}});return _0x41e309&&(_0xfae464[_0xb776ff(0xb2)]=_0x41e309[_0xb776ff(0xe9)]),_0xfae464;}));_0xfb3fe3[_0x37b077(0xf1)]=_0x453026,_0xfb3fe3['pembuat_komitmen']=_0x377b6f?_0x377b6f:{},_0xfb3fe3[_0x37b077(0xed)]=_0x2f93b2?_0x2f93b2:{},_0xfb3fe3['surat_tugas']=_0x5c2470?_0x5c2470['data'][_0x37b077(0x10e)]:{};}if(_0x1792a3[_0x37b077(0x9a)]){const _0x3d8c36=_0x1792a3[_0x37b077(0x9a)][_0x37b077(0x11f)](_0x1a300d=>_0x1a300d[_0x37b077(0xc8)]===_0x37b077(0xc1))[_0x37b077(0xf9)]((_0x11e647,_0x16bbfd)=>_0x11e647+_0x16bbfd[_0x37b077(0x10f)],0x0);_0x1792a3[_0x37b077(0xd8)]=_0x3d8c36;}_0x384b1b['send']({'status':!![],'data':{'bukti_perjalanan':_0x1792a3,'form_dpr':_0xfb3fe3}});}catch(_0x42b4d8){console[_0x37b077(0xff)](_0x42b4d8),_0x384b1b[_0x37b077(0xd0)]({'status':![],'message':_0x37b077(0xb6)});}},async 'update'(_0x24da77,_0x1e086c){const _0x2b55ac=a3_0x1d2cda;try{var _0x22b918=_0x24da77[_0x2b55ac(0xbb)];const _0x29a281=await model['BuktiPerjalanan'][_0x2b55ac(0x12e)](_0x22b918,{'where':{'id':_0x24da77[_0x2b55ac(0xc6)]['id']}});_0x1e086c[_0x2b55ac(0xd0)]({'status':!![],'data':_0x29a281});}catch(_0x3e2097){console[_0x2b55ac(0xff)](_0x3e2097),_0x1e086c[_0x2b55ac(0xae)](0x190)[_0x2b55ac(0xd0)]({'status':![],'message':_0x2b55ac(0xb6)});}},async 'detail_status'(_0x970ab9,_0xa1397e){const _0x422033=a3_0x1d2cda;try{const _0x448614=await model[_0x422033(0xc3)]['findOne']({'where':{'id':_0x970ab9['params']['id']}});var _0x11e402=_0x448614[_0x422033(0xb1)];_0xa1397e[_0x422033(0xd0)]({'status':!![],'data':_0x11e402});}catch(_0x385cf9){console[_0x422033(0xff)](_0x385cf9),_0xa1397e['status'](0x190)['send']({'status':![],'message':_0x422033(0xb6)});}},async 'update_status'(_0x30bf88,_0x4ba621){const _0x2b0748=a3_0x1d2cda;let _0x2b25d1=!![],_0x37832a=_0x2b0748(0xea);try{const _0x36f94a=_0x30bf88[_0x2b0748(0xbb)],_0x590ddf=await model[_0x2b0748(0xc3)]['findOne']({'where':{'id':_0x30bf88[_0x2b0748(0xc6)]['id']}});_0x36f94a[_0x2b0748(0x11a)]&&_0x590ddf[_0x2b0748(0x11a)]===null&&(_0x36f94a[_0x2b0748(0xc2)]=_0x30bf88[_0x2b0748(0xa6)][_0x2b0748(0xeb)],_0x36f94a[_0x2b0748(0xfe)]=moment()[_0x2b0748(0xcb)](_0x2b0748(0xf5)));_0x36f94a[_0x2b0748(0xee)]&&(_0x36f94a['ketua_id']=_0x30bf88['user']['pegawai_id'],_0x36f94a[_0x2b0748(0x118)]=moment()[_0x2b0748(0xcb)](_0x2b0748(0xf5)));_0x36f94a[_0x2b0748(0xa7)]&&(_0x36f94a[_0x2b0748(0xb0)]=_0x30bf88[_0x2b0748(0xa6)][_0x2b0748(0xeb)],_0x36f94a[_0x2b0748(0x114)]=moment()[_0x2b0748(0xcb)](_0x2b0748(0xf5)));_0x36f94a['status_ppk']&&_0x590ddf[_0x2b0748(0xa4)]===null&&(_0x36f94a[_0x2b0748(0xad)]=_0x30bf88[_0x2b0748(0xa6)][_0x2b0748(0xeb)],_0x36f94a[_0x2b0748(0xbd)]=moment()[_0x2b0748(0xcb)]('YYYY-MM-DD\x20HH:mm:ss'));const _0x1edddc=await model['BuktiPerjalanan'][_0x2b0748(0x12e)](_0x36f94a,{'where':{'id':_0x30bf88[_0x2b0748(0xc6)]['id']}});if((_0x36f94a[_0x2b0748(0x11a)]==='Disetujui'||_0x36f94a['status_ppk']===_0x2b0748(0xdb))&&_0x36f94a['passphrase']){const _0x554081=await checkNik(_0x30bf88[_0x2b0748(0xa6)]['pegawai_id'],_0x30bf88);console[_0x2b0748(0xff)](_0x554081);let _0x1e1f25=!![];if(_0x554081['status']){const _0x3e32a0=await model[_0x2b0748(0xc3)][_0x2b0748(0xce)]({'where':{'id':_0x30bf88['params']['id']}});var _0x161f55=_0x3e32a0[_0x2b0748(0xb1)],_0x4e19b3='$';_0x36f94a[_0x2b0748(0x11a)]&&(_0x4e19b3='*',_0x1e1f25=![]);const _0x36dfac=await pdf_tte(_0x30bf88[_0x2b0748(0xc6)]['id'],_0x30bf88,_0x36f94a,_0x4e19b3,_0x1e1f25);if(_0x36dfac===!![]){const _0x2874e3=await model[_0x2b0748(0xc3)][_0x2b0748(0x12e)](_0x36f94a,{'where':{'id':_0x30bf88[_0x2b0748(0xc6)]['id']}});_0x4ba621[_0x2b0748(0xd0)]({'status':!![]});}else _0x2b25d1=![],_0x37832a=_0x2b0748(0x109);}else _0x2b25d1=![],_0x37832a=_0x554081[_0x2b0748(0x103)];}const _0x1cab52=await axios[_0x2b0748(0xdf)](process['env']['GATEWAYE_URL']+_0x2b0748(0x119)+_0x30bf88[_0x2b0748(0xc6)]['id'],{'headers':{'Authorization':'Bearer\x20'+_0x30bf88['token']}}),_0x19e51c=_0x1cab52[_0x2b0748(0x10e)][_0x2b0748(0x10e)];if(_0x19e51c[_0x2b0748(0x11a)]===_0x2b0748(0xdb)&&_0x19e51c[_0x2b0748(0xa4)]===_0x2b0748(0xdb)){try{let _0xeb9295=[];const _0x3b1d9f=_0x19e51c[_0x2b0748(0x9a)][_0x2b0748(0x11f)](_0x2d101c=>_0x2d101c['jenis']===_0x2b0748(0xf4)),_0xd84eb1=_0x3b1d9f[_0x2b0748(0xf9)]((_0x106817,_0x363660)=>_0x106817+_0x363660['total'],0x0),_0xd9669f=_0x19e51c[_0x2b0748(0x117)][_0x2b0748(0x11f)](_0x441fc3=>_0x441fc3[_0x2b0748(0xf3)]===!![]),_0x4660c9=_0xd9669f[_0x2b0748(0xf9)]((_0x340fcc,_0x2447dc)=>_0x340fcc+_0x2447dc[_0x2b0748(0x10f)],0x0);_0x4660c9>0x0&&_0xeb9295['push']({'jumlah':_0x4660c9,'tanggal_mulai':null,'tanggal_selesai':null,'uraian':_0x2b0748(0xe8)});_0xd84eb1>0x0&&_0xeb9295[_0x2b0748(0x125)]({'jumlah':_0xd84eb1,'tanggal_mulai':null,'tanggal_selesai':null,'uraian':_0x2b0748(0x10b)});if(_0xeb9295['length']>0x0){const _0x38f9cc=await model['FormDpr']['findOne']({'where':{'pegawai_id':_0x19e51c[_0x2b0748(0xeb)],'surat_tugas_id':_0x19e51c[_0x2b0748(0x123)]}});_0x38f9cc?await model[_0x2b0748(0xaf)]['update']({'list_pengeluaran':_0xeb9295},{'where':{'id':_0x38f9cc['id']}}):await model[_0x2b0748(0xaf)][_0x2b0748(0xb5)]({'pegawai_id':_0x19e51c[_0x2b0748(0xeb)],'surat_tugas_id':_0x19e51c[_0x2b0748(0x123)],'list_pengeluaran':_0xeb9295});}}catch(_0x268735){console[_0x2b0748(0xff)](_0x268735);}try{const _0x5607a1=await modelKepegawaian['TenagaAudit']['findOne']({'where':{'id':parseInt(_0x19e51c[_0x2b0748(0xeb)])}}),_0x1d9e79=_0x5607a1,_0x15b8ef=await modelPengawasan[_0x2b0748(0xcf)]['findOne']({'where':{'id':_0x19e51c[_0x2b0748(0x123)]}}),_0x3e0af0=_0x15b8ef,_0x206f3e=await modelPengawasan[_0x2b0748(0x12b)]['findOne']({'where':{'surat_tugas_id':parseInt(_0x19e51c[_0x2b0748(0x123)]),'anggota_id':parseInt(_0x19e51c[_0x2b0748(0xeb)])}});let _0x58aeaf=_0x206f3e;console[_0x2b0748(0xff)](_0x58aeaf);let _0xed5f54=null,_0x2b3b65=null;if(!_0x58aeaf){const _0x42692d=_0x3e0af0[_0x2b0748(0xf2)]['find'](_0x37e0f5=>_0x37e0f5[_0x2b0748(0xeb)]===_0x19e51c[_0x2b0748(0xeb)]);if(_0x42692d&&_0x42692d[_0x2b0748(0xfd)]===_0x2b0748(0x128)){const _0x4f3be8=_0x3e0af0[_0x2b0748(0xf2)][_0x2b0748(0xf0)](_0x1ada21=>_0x1ada21[_0x2b0748(0xfd)]===_0x2b0748(0xd6));_0x58aeaf=await modelPengawasan[_0x2b0748(0x12b)]['findOne']({'where':{'surat_tugas_id':parseInt(_0x19e51c[_0x2b0748(0x123)]),'anggota_id':parseInt(_0x4f3be8['pegawai_id'])}});}}_0x58aeaf&&(_0xed5f54=_0x58aeaf[_0x2b0748(0xa3)],_0x2b3b65=_0x58aeaf['id']);console[_0x2b0748(0xff)](_0xed5f54);if(parseInt(_0x19e51c[_0x2b0748(0xd1)])<0x0){const _0xfceaed=await model[_0x2b0748(0x10a)]['findOne']({'where':{'pegawai_id':_0x19e51c[_0x2b0748(0xeb)],'surat_tugas_id':_0x19e51c['surat_tugas_id']}});_0xfceaed?await model['FormPembayaranPenagihan'][_0x2b0748(0x12e)]({'jumlah_biaya':_0x19e51c[_0x2b0748(0xd1)],'untuk_pembayaran':_0x2b0748(0x122)},{'where':{'id':_0xfceaed['id']}}):await model['FormPembayaranPenagihan']['create']({'pegawai_id':_0x19e51c[_0x2b0748(0xeb)],'surat_tugas_id':_0x19e51c[_0x2b0748(0x123)],'jumlah_biaya':_0x19e51c[_0x2b0748(0xd1)],'untuk_pembayaran':_0x2b0748(0x122)});const _0x2e1ff6=await modelKeuangan[_0x2b0748(0xe2)][_0x2b0748(0xce)]({'where':{'pegawai_id':_0x19e51c[_0x2b0748(0xeb)],'surat_tugas_id':_0x19e51c[_0x2b0748(0x123)]}}),_0x133216={'surat_tugas_id':_0x19e51c['surat_tugas_id'],'spd_id':_0x2b3b65,'jumlah':parseInt(_0x19e51c['sisa_pengembalian']*-0x1),'transfer':parseInt(_0x19e51c[_0x2b0748(0xd1)]*-0x1),'mak':_0x3e0af0[_0x2b0748(0xe3)],'pegawai_id':_0x19e51c[_0x2b0748(0xeb)]};_0x2e1ff6?await modelKeuangan[_0x2b0748(0xe2)][_0x2b0748(0x12e)](_0x133216,{'where':{'id':_0x2e1ff6['id']}}):await modelKeuangan[_0x2b0748(0xe2)][_0x2b0748(0xb5)](_0x133216);}else{const _0x326d9c=_0x19e51c['transportasi_data'][_0x2b0748(0x11f)](_0x5f3500=>_0x5f3500[_0x2b0748(0xc8)]===_0x2b0748(0xc1))['reduce']((_0x51e68f,_0xc249b0)=>_0x51e68f+_0xc249b0[_0x2b0748(0x10f)],0x0),_0xd3ddc9=await modelKeuangan[_0x2b0748(0x10d)][_0x2b0748(0xce)]({'where':{'pegawai_id':_0x19e51c['pegawai_id'],'surat_tugas_id':_0x19e51c[_0x2b0748(0x123)],'um_uf':'VF'}}),_0x356ec4=_0xd3ddc9;let _0x43c5e5={'pegawai_id':_0x19e51c[_0x2b0748(0xeb)],'surat_tugas_id':_0x19e51c['surat_tugas_id'],'usulan_id':_0x3e0af0['usulan_id'],'no_rek_debet':0x1cc7c8b9393c88,'nama_rek_debet':_0x2b0748(0xda),'no_rek_tujuan':_0x1d9e79['no_rek'],'nama_rek_tujuan':_0x1d9e79['nama_rek'],'jumlah':_0x19e51c['sisa_pengembalian'],'bank':_0x1d9e79[_0x2b0748(0x9b)],'pelaku_perjadin':_0x1d9e79[_0x2b0748(0x129)],'spd':_0xed5f54,'um_uf':'VF','nilai':_0x19e51c[_0x2b0748(0xd1)],'status':'Pending'};console[_0x2b0748(0xff)](_0x43c5e5),_0x356ec4?await modelKeuangan['Trasfer'][_0x2b0748(0x12e)](_0x43c5e5,{'where':{'id':_0x356ec4['id']}}):(_0x43c5e5['status']=_0x2b0748(0xbc),await modelKeuangan['Trasfer']['create'](_0x43c5e5));}}catch(_0x3fe450){console[_0x2b0748(0xff)](_0x3fe450);}}_0x2b25d1?_0x4ba621['send']({'status':!![],'message':_0x37832a}):_0x4ba621[_0x2b0748(0xd0)]({'status':![],'message':_0x37832a});}catch(_0x276d21){console['log'](_0x276d21),_0x4ba621['status'](0x190)['send']({'status':![],'message':'terjadi\x20error'});}},async 'delete'(_0x367b67,_0x2ebbf8){const _0x3cf096=a3_0x1d2cda;try{const _0xb23ed9=await model[_0x3cf096(0xc3)][_0x3cf096(0xd9)]({'where':{'id':_0x367b67[_0x3cf096(0xc6)]['id']}});await sendNotif(_0x3cf096(0xb9),_0x367b67[_0x3cf096(0xc6)]['id'],_0x367b67[_0x3cf096(0xa6)][_0x3cf096(0xeb)],_0x3cf096(0xb8),_0x3cf096(0x9d),_0x367b67[_0x3cf096(0xdc)]),_0x2ebbf8['send']({'status':!![],'data':_0xb23ed9});}catch(_0x31b8db){console[_0x3cf096(0xff)](_0x31b8db),_0x2ebbf8[_0x3cf096(0xae)](0x190)[_0x3cf096(0xd0)]({'status':![],'message':_0x3cf096(0xb6)});}},async 'revisi'(_0x323925,_0x206eda){const _0x52863e=a3_0x1d2cda;try{const {id:_0x7ad127}=_0x323925['params'],_0x2a5ebb=_0x323925[_0x52863e(0xbb)],_0x46ceeb=_0x323925[_0x52863e(0xbb)],_0x1f7f37=await encodeJwt(_0x2a5ebb),_0x378ec2=await model[_0x52863e(0xf8)][_0x52863e(0xce)]({'where':{'bukti_perjalanan_id':_0x7ad127}});if(_0x378ec2){if(_0x46ceeb[_0x52863e(0x123)])try{var _0xbfcccb=await axios[_0x52863e(0xdf)](process[_0x52863e(0xa1)][_0x52863e(0xef)]+_0x52863e(0x9f)+_0x46ceeb[_0x52863e(0x123)],{'headers':{'Authorization':_0x52863e(0xd7)+_0x323925['token']}});_0x46ceeb[_0x52863e(0x104)]=_0xbfcccb[_0x52863e(0x10e)]['data'];}catch(_0x5b5df4){}if(_0x46ceeb[_0x52863e(0xeb)])try{var _0xbfcccb=await axios[_0x52863e(0xdf)](process['env'][_0x52863e(0xef)]+_0x52863e(0x11b)+_0x46ceeb[_0x52863e(0xeb)],{'headers':{'Authorization':'Bearer\x20'+_0x323925['token']}});_0x46ceeb[_0x52863e(0xed)]=_0xbfcccb[_0x52863e(0x10e)]['data'];}catch(_0xe048a4){}if(_0x46ceeb[_0x52863e(0x9a)]){const _0x30528d=_0x46ceeb[_0x52863e(0x9a)][_0x52863e(0x11f)](_0x19dd0a=>_0x19dd0a['dibayar_oleh']==='Kantor')[_0x52863e(0xf9)]((_0x1d6ef2,_0x1d66d5)=>_0x1d6ef2+_0x1d66d5[_0x52863e(0x10f)],0x0);_0x46ceeb[_0x52863e(0xd8)]=_0x30528d;}const _0x204c50=await encodeJwt(_0x46ceeb);await Promise[_0x52863e(0xde)]([model['BuktiPerjalanan'][_0x52863e(0x12e)](_0x2a5ebb,{'where':{'id':_0x7ad127},'returning':!![]}),model[_0x52863e(0xf8)]['update']({'updated':_0x204c50},{'where':{'bukti_perjalanan_id':_0x7ad127}})]);}else{const _0x502191=await model['BuktiPerjalanan'][_0x52863e(0xce)]({'where':{'id':_0x7ad127},'raw':!![]});if(_0x502191['surat_tugas_id'])try{var _0xbfcccb=await axios['get'](process[_0x52863e(0xa1)][_0x52863e(0xef)]+_0x52863e(0x9f)+_0x502191[_0x52863e(0x123)],{'headers':{'Authorization':'Bearer\x20'+_0x323925[_0x52863e(0xdc)]}});_0x502191[_0x52863e(0x104)]=_0xbfcccb[_0x52863e(0x10e)][_0x52863e(0x10e)];}catch(_0x246d1c){}if(_0x502191[_0x52863e(0xeb)])try{var _0xbfcccb=await axios[_0x52863e(0xdf)](process[_0x52863e(0xa1)][_0x52863e(0xef)]+_0x52863e(0x11b)+_0x502191[_0x52863e(0xeb)],{'headers':{'Authorization':_0x52863e(0xd7)+_0x323925[_0x52863e(0xdc)]}});_0x502191['pegawai']=_0xbfcccb[_0x52863e(0x10e)][_0x52863e(0x10e)];}catch(_0xf33462){}if(_0x502191[_0x52863e(0x9a)]){const _0x276c5d=_0x502191[_0x52863e(0x9a)]['filter'](_0x36037e=>_0x36037e[_0x52863e(0xc8)]===_0x52863e(0xc1))[_0x52863e(0xf9)]((_0x1ff89b,_0x5a5f74)=>_0x1ff89b+_0x5a5f74[_0x52863e(0x10f)],0x0);_0x502191['uang_muka_transportasi']=_0x276c5d;}const _0x5b48ab=await encodeJwt(_0x502191);await Promise[_0x52863e(0xde)]([model[_0x52863e(0xc3)][_0x52863e(0x12e)](_0x2a5ebb,{'where':{'id':_0x7ad127},'returning':!![]}),model['RevisiBuktiPerjalanan'][_0x52863e(0xb5)]({'bukti_perjalanan_id':_0x7ad127,'old':_0x5b48ab,'updated':_0x1f7f37,'timestamp':Date['now']()})]);}return await sendNotif(_0x52863e(0xb9),_0x7ad127,_0x323925[_0x52863e(0xa6)][_0x52863e(0xeb)],_0x52863e(0xb8),_0x52863e(0x116),_0x323925[_0x52863e(0xdc)]),_0x206eda[_0x52863e(0xae)](0xc8)[_0x52863e(0xd0)]({'status':!![],'message':'Revisi\x20berhasil\x20dilakukan'});}catch(_0x4fcfad){return console[_0x52863e(0x98)](_0x4fcfad),_0x206eda[_0x52863e(0xae)](0x1f4)[_0x52863e(0xd0)]({'status':![],'message':_0x52863e(0xb6)});}},async 'exportBuktiPerjalanan'(_0x1bab56,_0xb03d08){const _0x5c4a89=a3_0x1d2cda;try{const {page:page=0x1,size:size=0xa,sortby:sortby=_0x5c4a89(0x12d),orderby:orderby='desc',search:_0xdc8f6d,byuser:_0x307a0b}=_0x1bab56['query'];let _0x58a291={},_0x3dec93={};if(_0xdc8f6d){const _0x2b06f7=await model[_0x5c4a89(0xaf)]['findAll']({'attributes':[_0x5c4a89(0x123)],'group':[_0x5c4a89(0x123)]});let _0x559d86=[];for(let _0xeb7ffe=0x0;_0xeb7ffe<_0x2b06f7['length'];_0xeb7ffe++){const _0x1ebfb6=_0x2b06f7[_0xeb7ffe][_0x5c4a89(0xb1)];_0x559d86[_0x5c4a89(0x125)](_0x1ebfb6['surat_tugas_id']);}const _0x3bd90d=await model[_0x5c4a89(0xaf)][_0x5c4a89(0x120)]({'attributes':[_0x5c4a89(0xeb)],'group':[_0x5c4a89(0xeb)]});let _0x3564b0=[];for(let _0x378c2b=0x0;_0x378c2b<_0x3bd90d[_0x5c4a89(0xac)];_0x378c2b++){const _0x4f654b=_0x3bd90d[_0x378c2b][_0x5c4a89(0xb1)];_0x3564b0[_0x5c4a89(0x125)](_0x4f654b[_0x5c4a89(0xeb)]);}const [_0x303fe8,_0x105865]=await Promise[_0x5c4a89(0xde)]([axios[_0x5c4a89(0xdf)](process[_0x5c4a89(0xa1)]['GATEWAYE_URL']+_0x5c4a89(0x126)+_0xdc8f6d+_0x5c4a89(0x105)+_0x559d86,{'headers':{'Authorization':_0x5c4a89(0xd7)+_0x1bab56[_0x5c4a89(0xdc)]}}),axios[_0x5c4a89(0xdf)](process[_0x5c4a89(0xa1)][_0x5c4a89(0xef)]+_0x5c4a89(0xa2)+_0xdc8f6d+'&arrid='+_0x3564b0,{'headers':{'Authorization':'Bearer\x20'+_0x1bab56[_0x5c4a89(0xdc)]}})]),_0x1b6828=_0x303fe8[_0x5c4a89(0x10e)]['data'],_0x557d54=_0x105865['data'][_0x5c4a89(0x10e)];let _0x268d79=[];for(let _0x3703a5=0x0;_0x3703a5<_0x1b6828['length'];_0x3703a5++){const _0x3bf638=_0x1b6828[_0x3703a5];_0x268d79[_0x5c4a89(0x125)](_0x3bf638['id']);}_0x268d79['length']>0x0&&(_0x58a291['surat_tugas_id']={[Op['in']]:_0x268d79});let _0x177426=[];for(let _0x1c2f66=0x0;_0x1c2f66<_0x557d54[_0x5c4a89(0xac)];_0x1c2f66++){const _0x61d802=_0x557d54[_0x1c2f66];_0x177426[_0x5c4a89(0x125)](_0x61d802['id']);}_0x177426[_0x5c4a89(0xac)]>0x0&&(_0x58a291[_0x5c4a89(0xeb)]={[Op['in']]:_0x177426});}if(_0x1bab56['user'][_0x5c4a89(0x9c)]!==0x1&&_0x1bab56[_0x5c4a89(0x115)][_0x5c4a89(0xdf)]!=='all'){let _0x14a73a=[];const _0x4ff986=await model[_0x5c4a89(0xc3)][_0x5c4a89(0x120)]({'raw':!![]});for(let _0x5ce114=0x0;_0x5ce114<_0x4ff986[_0x5c4a89(0xac)];_0x5ce114++){const _0x5dbac1=_0x4ff986[_0x5ce114];if(_0x5dbac1[_0x5c4a89(0xee)]!==_0x5c4a89(0xdb)||_0x5dbac1[_0x5c4a89(0xee)]==='Disetujui')try{const _0x5a5ca3=await modelPengawasan[_0x5c4a89(0xcf)][_0x5c4a89(0xce)]({'where':{'id':_0x5dbac1[_0x5c4a89(0x123)],'kepada':{[Op[_0x5c4a89(0xd2)]]:[{'pegawai_id':_0x1bab56[_0x5c4a89(0xa6)][_0x5c4a89(0xeb)]}]}}});_0x5a5ca3&&_0x5a5ca3['id']===_0x5dbac1['surat_tugas_id']&&_0x14a73a[_0x5c4a89(0x125)](_0x5dbac1['id']);}catch(_0x3ec2a5){console['log'](_0x3ec2a5);}else{if(_0x5dbac1[_0x5c4a89(0xee)]==='Disetujui'&&_0x1bab56[_0x5c4a89(0xa6)][_0x5c4a89(0xec)]==='Verifikasi\x20dan\x20Pelaporan'&&_0x5dbac1[_0x5c4a89(0xa7)]!=='Disetujui')_0x14a73a[_0x5c4a89(0x125)](_0x5dbac1['id']);else{if(_0x5dbac1[_0x5c4a89(0xee)]===_0x5c4a89(0xdb)&&_0x5dbac1[_0x5c4a89(0xa7)]===_0x5c4a89(0xdb)&&_0x5dbac1['status_ppk']!==_0x5c4a89(0xdb))try{const _0x27a604=await modelPengawasan[_0x5c4a89(0xcf)]['findOne']({'where':{'id':_0x5dbac1[_0x5c4a89(0x123)]}});_0x27a604&&_0x27a604[_0x5c4a89(0xad)]===_0x1bab56[_0x5c4a89(0xa6)]['pegawai_id']&&_0x14a73a[_0x5c4a89(0x125)](_0x5dbac1['id']);}catch(_0x131736){console['log'](_0x131736);}}}_0x58a291[Op['or']]=[{'pegawai_id':_0x1bab56['user'][_0x5c4a89(0xeb)]},{'id':{[Op['in']]:_0x14a73a}}];}}const _0x38209d={'where':_0x58a291,'attributes':['surat_tugas_id',[sequelize['fn'](_0x5c4a89(0x11c),sequelize[_0x5c4a89(0x121)]('id')),_0x5c4a89(0xf6)]],'group':[_0x5c4a89(0x123)],'raw':!![],'limit':parseInt(size),'offset':(parseInt(page)-0x1)*parseInt(size)},{count:_0x4a30cb,rows:_0x40986a}=await model[_0x5c4a89(0xc3)][_0x5c4a89(0x11e)]({..._0x38209d}),_0x870cba=await Promise[_0x5c4a89(0xde)](_0x40986a['map'](async _0x21fd4c=>{const _0x51a91e=_0x5c4a89;if(_0x21fd4c['surat_tugas_id']){_0x21fd4c['id']=_0x21fd4c['surat_tugas_id'];try{var _0x55da10=await axios[_0x51a91e(0xdf)](process[_0x51a91e(0xa1)][_0x51a91e(0xef)]+_0x51a91e(0x9f)+_0x21fd4c[_0x51a91e(0x123)],{'headers':{'Authorization':_0x51a91e(0xd7)+_0x1bab56['token']}});_0x21fd4c['surat_tugas']=_0x55da10[_0x51a91e(0x10e)]['data'];}catch(_0x2f2327){console[_0x51a91e(0xff)](_0x2f2327);}}return _0x21fd4c;})),_0x4c09e4=_0x4a30cb['length'],_0x1f4b81=getPagingData({'count':_0x4c09e4,'rows':_0x870cba},page,parseInt(size));_0xb03d08[_0x5c4a89(0xd0)]({'status':!![],..._0x1f4b81});}catch(_0x10f387){console[_0x5c4a89(0xff)](_0x10f387),_0xb03d08[_0x5c4a89(0xd0)]({'status':![],'message':'terjadi\x20error'});}},async 'exportBuktiPerjalananDetail'(_0x12e97c,_0x3cebfb){const _0x502216=a3_0x1d2cda,{id:_0x171031}=_0x12e97c[_0x502216(0xc6)];try{var _0x2afde0=null,_0x528d87=await axios[_0x502216(0xdf)](process[_0x502216(0xa1)][_0x502216(0xef)]+'/pengawasan_internal/surat-tugas/'+_0x171031,{'headers':{'Authorization':_0x502216(0xd7)+_0x12e97c['token']}});_0x2afde0=_0x528d87[_0x502216(0x10e)][_0x502216(0x10e)];const _0x1d3b5f=await model[_0x502216(0xc3)]['findAll']({'where':{'surat_tugas_id':_0x171031},'raw':!![]});_0x1d3b5f&&(_0x2afde0[_0x502216(0xa0)]=_0x1d3b5f,_0x2afde0[_0x502216(0xa0)]=await Promise['all'](_0x2afde0[_0x502216(0xa0)][_0x502216(0xe7)](async _0x3d6a0b=>{const _0x1d0213=_0x502216;if(_0x3d6a0b[_0x1d0213(0xeb)])try{var _0x4bfd22=await axios[_0x1d0213(0xdf)](process[_0x1d0213(0xa1)][_0x1d0213(0xef)]+_0x1d0213(0x11b)+_0x3d6a0b[_0x1d0213(0xeb)],{'headers':{'Authorization':_0x1d0213(0xd7)+_0x12e97c[_0x1d0213(0xdc)]}});_0x3d6a0b[_0x1d0213(0xed)]=_0x4bfd22[_0x1d0213(0x10e)][_0x1d0213(0x10e)];}catch(_0x224722){}if(_0x3d6a0b[_0x1d0213(0x123)]&&_0x3d6a0b[_0x1d0213(0xeb)])try{const _0x4dd52d=await modelKeuangan[_0x1d0213(0x10d)][_0x1d0213(0x120)]({'where':{'surat_tugas_id':_0x3d6a0b['surat_tugas_id'],'pegawai_id':_0x3d6a0b[_0x1d0213(0xeb)]},'raw':!![]});_0x3d6a0b[_0x1d0213(0xe6)]=_0x4dd52d;}catch(_0x2471d4){console[_0x1d0213(0xff)](_0x2471d4);}if(_0x3d6a0b[_0x1d0213(0xad)])try{var _0x4bfd22=await axios[_0x1d0213(0xdf)](process[_0x1d0213(0xa1)]['GATEWAYE_URL']+_0x1d0213(0x11b)+_0x3d6a0b[_0x1d0213(0xad)],{'headers':{'Authorization':'Bearer\x20'+_0x12e97c[_0x1d0213(0xdc)]}});_0x3d6a0b['verifikator']=_0x4bfd22[_0x1d0213(0x10e)]['data'];}catch(_0x24dda1){}return _0x3d6a0b;}))),_0x3cebfb[_0x502216(0xd0)]({'status':!![],'data':_0x2afde0});}catch(_0x1d2a5f){console['log'](_0x1d2a5f),_0x3cebfb[_0x502216(0xd0)]({'status':![],'message':'terjadi\x20error'});}}};