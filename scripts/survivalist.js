var knifeli=32,knifehe=64,knifesta=15,cstl=49,csth=86,cstm=15,kat1=68,kat2=98,pull=70,pulh=145,pulm=528,zwel=85,zweh=195,zwem=63,evil=480,evih=29,evim=90,bcl=63,bch=165,bcm=175,LMG=30,varm=30,ak47=40,scar=55,grenp=30,c4=820,rpg=750,m79=225,hm9mm=20,hmSMG=15,hmShot=20,hmAR=40,spitfire=40,caulk=10,flame=21,micro=14,incend=27,pelletinc=9,rev18=30,m1911=50,deagle=91,mag500=150,winch=80,hmtp=20,grenp=30,mag500=150,winch=80,rev18=30,rail=750,xbow=350,m14=90,spx=180,sg500=20,db=25,m4=30,aa12=20,incend=27,hmt301=20,pelletsg=7,pelletdb=12,pelletinc=9,pellethmt=6,pelletvlad=7,salv=.3,vlad=30,hz12=20,pellethz12=10,mp7=16,mp5=25,p90=30,kriss=33,hmt201=20,meleeXP=.1;$(function(){plvl=$("#perkLVL").val(),plvl*=.006,cstcalc1=cstl+plvl*cstl,cstcalc2=csth+plvl*csth,cstcalc3=cstm+plvl*cstm,katcalc1=kat1+plvl*kat1,katcalc2=kat2+plvl*kat2,pulcalc1=pull+plvl*pull,pulcalc2=pulh+plvl*pulh,pulcalc3=pulm+plvl*pulm,zweic1=zwel+plvl*zwel,zweic2=zweh+plvl*zweh,zweic3=zwem+plvl*zwem,evi1c=evil+plvl*evil,evihc=evih+plvl*evih,evimc=evim+plvl*evim,bclc=bcl+plvl*bcl,bchc=bch+plvl*bch,bcmc=bcm+plvl*bcm,vladc=vlad+plvl*vlad,cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evih),evimc=Math.round(evim),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc),varmcalc1=varm+plvl*varm,akcalc2=ak47+plvl*ak47,scarcalc3=scar+plvl*scar,LMGcalc4=LMG+plvl*LMG,varmcalc1=Math.round(varmcalc1),akcalc2=Math.round(akcalc2),scarcalc3=Math.round(scarcalc3),LMGcalc4=Math.round(LMGcalc4),$(".res1").html(varmcalc1),$(".res2").html(akcalc2),$(".res3").html(scarcalc3),$(".LMG").html(LMGcalc4),grencalc1=grenp+plvl*grenp,m79calc2=m79+plvl*m79,rpgcalc3=rpg+plvl*rpg,c4calc4=c4+plvl*c4,grencalc1=Math.round(grencalc1),m79calc2=Math.round(m79calc2),rpgcalc3=Math.round(rpgcalc3),c4calc4=Math.round(c4calc4),grencalcb=7*grencalc1,$(".hx25").html(grencalc1),$(".hx25b").html(grencalcb),$(".m79").html(m79calc2),$(".rpg").html(rpgcalc3),$(".c4").html(c4calc4),$(".m16").html(m79calc2),hm9mmcalc=hm9mm+hm9mm*plvl,hmSMGcalc=hmSMG+hmSMG*plvl,hmShotcalc=hmShot+hmShot*plvl,hmARcalc=hmAR+hmAR*plvl,hm9mmcalc=Math.round(hm9mmcalc),hmSMGcalc=Math.round(hmSMGcalc),hmShotcalc=Math.round(hmShotcalc),hmARcalc=Math.round(hmARcalc),hmShotcalcb=6*hmShotcalc,$(".hm9mm").html(hm9mmcalc),$(".hmSMG").html(hmSMGcalc),$(".hmAR").html(hmShotcalc),$(".hmShota").html(hmARcalc),$(".hmShotb").html(hmShotcalcb),caulkcalc1=caulk+plvl*caulk,flamecalc2=flame+plvl*flame,microcalc3=micro+plvl*micro,incendcalc4=incend+plvl*incend,spitfirecalc5=spitfire+plvl*spitfire,caulkcalc1=Math.round(caulkcalc1),flamecalc2=Math.round(flamecalc2),microcalc3=Math.round(microcalc3),incendcalc4=Math.round(incendcalc4),tgcalc5=incendcalc4*pelletinc,spitfirecalc5=Math.round(spitfire),caulkcalc1a=.08*caulkcalc1,flamecalc2a=.08*flamecalc2,microcalc3a=.08*microcalc3,incendcalc4a=.07*incendcalc4,spitfirecalc5a=.07*spitfirecalc5,caulkcalc1a=Math.round(caulkcalc1a),flamecalc2a=Math.round(flamecalc2a),microcalc3a=Math.round(microcalc3a),incendcalc4a=Math.round(incendcalc4a),spitfirecalc5a=Math.round(spitfirecalc5a),$(".caulk").html(caulkcalc1),$(".flame").html(flamecalc2),$(".micro").html(microcalc3),$(".tg1").html(incendcalc4),$(".tg2").html(tgcalc5),$(".caulkaft").html(caulkcalc1a),$(".flameaft").html(flamecalc2a),$(".microaft").html(microcalc3a),$(".tgaft").html(incendcalc4a),$(".spit").html(spitfirecalc5),$(".spitaft").html(spitfirecalc5a),rev18calc1=rev18+plvl*rev18,m1911calc2=m1911+plvl*m1911,deaglecalc3=deagle+plvl*deagle,mag500calc4=mag500+plvl*mag500,winchcalc5=winch+plvl*winch,hmtpcalc6=hmtp+plvl*hmtp,grenpcalc7=grenp+plvl*grenp,rev18calc1=Math.round(rev18calc1),m1911calc2=Math.round(m1911calc2),deaglecalc3=Math.round(deaglecalc3),mag500calc4=Math.round(mag500calc4),winchcalc5=Math.round(winchcalc5),hmtpcalc6=Math.round(hmtpcalc6),grenpcalc7=Math.round(grenpcalc7),$(".rev1858").html(rev18calc1),$(".m19").html(m1911calc2),$(".de1").html(deaglecalc3),$(".mag500").html(mag500calc4),railcalc2=rail+plvl*rail,m14calc3=m14+plvl*m14,winchcalc5=winch+plvl*winch,xbowcalc6=xbow+plvl*xbow,spxcalc7=spx+plvl*spx,railcalc2=Math.round(railcalc2),m14calc3=Math.round(m14calc3),winchcalc5=Math.round(winchcalc5),xbowcalc6=Math.round(xbowcalc6),spxcalc7=Math.round(spxcalc7),$(".rail").html(railcalc2),$(".m14").html(m14calc3),$(".winc").html(winchcalc5),$(".xbow").html(xbowcalc6),$(".spx").html(spxcalc7),sg500calc1=sg500+plvl*sg500,dbcalc2=db+plvl*db,m4calc3=m4+plvl*m4,sg500calc4=sg500+plvl*sg500,hzcalc5=hz12+plvl*hz12,sg500calc1=Math.round(sg500calc1),dbcalc2=Math.round(dbcalc2),m4calc3=Math.round(m4calc3),sg500calc4=Math.round(sg500calc4),hzcalc5=Math.round(hzcalc5),$(".sg1").html(sg500calc1),$(".dbs1").html(dbcalc2),$(".mcs1").html(m4calc3),$(".aa121").html(sg500calc4),$(".hz1").html(hzcalc5),sg500calc1b=sg500calc1*pelletsg,dbcalc2b=dbcalc2*pelletdb,m4calc3b=m4calc3*pelletsg,sg500calc4b=sg500calc4*pelletsg,hzcalc5b=hzcalc5*pellethz12,$(".sg2").html(sg500calc1b),$(".dbs2").html(dbcalc2b),$(".mcs2").html(m4calc3b),$(".aa122").html(sg500calc4b),$(".hz2").html(hzcalc5b),mp7calc1=mp7+plvl*mp7,mp5calc2=mp5+plvl*mp5,p90calc3=p90+plvl*p90,krisscalc4=kriss+plvl*kriss,mp7calc1=Math.round(mp7calc1),mp5calc2=Math.round(mp5calc2),p90calc3=Math.round(p90calc3),krisscalc4=Math.round(krisscalc4),$(".mp7").html(mp7calc1),$(".mp5").html(mp5calc2),$(".p90").html(p90calc3),$(".kris").html(krisscalc4)}),$("#perkLVL, #chkMelee").on("click change blur focus",function(){$("#chkMelee").is(":checked")?(plvl=$("#perkLVL").val(),plvl*=.006,cstcalc1=cstl+plvl*cstl+meleeXP*cstl,cstcalc2=csth+plvl*csth+meleeXP*csth,cstcalc3=cstm+plvl*cstm+meleeXP*cstm,katcalc1=kat1+plvl*kat1+meleeXP*kat1,katcalc2=kat2+plvl*kat2+meleeXP*kat2,pulcalc1=pull+plvl*pull+meleeXP*pull,pulcalc2=pulh+plvl*pulh+meleeXP*pulh,pulcalc3=pulm+plvl*pulm,zweic1=zwel+plvl*zwel+meleeXP*zwel,zweic2=zweh+plvl*zweh+meleeXP*zweh,zweic3=zwem+plvl*zwem+meleeXP*zwem,evi1c=evil+plvl*evil+plvl*evil,evihc=evih+plvl*evih+meleeXP*evih,evimc=evim+plvl*evim+meleeXP*evim,bclc=bcl+plvl*bcl+meleeXP*bcl,bchc=bch+plvl*bch+meleeXP*bch,bcmc=bcm+plvl*bcm+meleeXP*bcm,vladc=vlad+plvl*vlad,cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evih),evimc=Math.round(evim),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc),varmcalc1=varm+plvl*varm,akcalc2=ak47+plvl*ak47,scarcalc3=scar+plvl*scar,LMGcalc4=LMG+plvl*LMG,varmcalc1=Math.round(varmcalc1),akcalc2=Math.round(akcalc2),scarcalc3=Math.round(scarcalc3),LMGcalc4=Math.round(LMGcalc4),$(".res1").html(varmcalc1),$(".res2").html(akcalc2),$(".res3").html(scarcalc3),$(".LMG").html(LMGcalc4),grencalc1=grenp+plvl*grenp,m79calc2=m79+plvl*m79,rpgcalc3=rpg+plvl*rpg,c4calc4=c4+plvl*c4,grencalc1=Math.round(grencalc1),m79calc2=Math.round(m79calc2),rpgcalc3=Math.round(rpgcalc3),c4calc4=Math.round(c4calc4),grencalcb=7*grencalc1,$(".hx25").html(grencalc1),$(".hx25b").html(grencalcb),$(".m79").html(m79calc2),$(".rpg").html(rpgcalc3),$(".c4").html(c4calc4),$(".m16").html(m79calc2),hm9mmcalc=hm9mm+hm9mm*plvl,hmSMGcalc=hmSMG+hmSMG*plvl,hmShotcalc=hmShot+hmShot*plvl,hmARcalc=hmAR+hmAR*plvl,hm9mmcalc=Math.round(hm9mmcalc),hmSMGcalc=Math.round(hmSMGcalc),hmShotcalc=Math.round(hmShotcalc),hmARcalc=Math.round(hmARcalc),hmShotcalcb=6*hmShotcalc,$(".hm9mm").html(hm9mmcalc),$(".hmSMG").html(hmSMGcalc),$(".hmAR").html(hmShotcalc),$(".hmShota").html(hmARcalc),$(".hmShotb").html(hmShotcalcb),caulkcalc1=caulk+plvl*caulk,flamecalc2=flame+plvl*flame,microcalc3=micro+plvl*micro,incendcalc4=incend+plvl*incend,spitfirecalc5=spitfire+plvl*spitfire,caulkcalc1=Math.round(caulkcalc1),flamecalc2=Math.round(flamecalc2),microcalc3=Math.round(microcalc3),incendcalc4=Math.round(incendcalc4),tgcalc5=incendcalc4*pelletinc,spitfirecalc5=Math.round(spitfire),caulkcalc1a=.08*caulkcalc1,flamecalc2a=.08*flamecalc2,microcalc3a=.08*microcalc3,incendcalc4a=.07*incendcalc4,spitfirecalc5a=.07*spitfirecalc5,caulkcalc1a=Math.round(caulkcalc1a),flamecalc2a=Math.round(flamecalc2a),microcalc3a=Math.round(microcalc3a),incendcalc4a=Math.round(incendcalc4a),spitfirecalc5a=Math.round(spitfirecalc5a),$(".caulk").html(caulkcalc1),$(".flame").html(flamecalc2),$(".micro").html(microcalc3),$(".tg1").html(incendcalc4),$(".tg2").html(tgcalc5),$(".caulkaft").html(caulkcalc1a),$(".flameaft").html(flamecalc2a),$(".microaft").html(microcalc3a),$(".tgaft").html(incendcalc4a),$(".spit").html(spitfirecalc5),$(".spitaft").html(spitfirecalc5a),rev18calc1=rev18+plvl*rev18,m1911calc2=m1911+plvl*m1911,deaglecalc3=deagle+plvl*deagle,mag500calc4=mag500+plvl*mag500,winchcalc5=winch+plvl*winch,hmtpcalc6=hmtp+plvl*hmtp,grenpcalc7=grenp+plvl*grenp,rev18calc1=Math.round(rev18calc1),m1911calc2=Math.round(m1911calc2),deaglecalc3=Math.round(deaglecalc3),mag500calc4=Math.round(mag500calc4),winchcalc5=Math.round(winchcalc5),hmtpcalc6=Math.round(hmtpcalc6),grenpcalc7=Math.round(grenpcalc7),$(".rev1858").html(rev18calc1),$(".m19").html(m1911calc2),$(".de1").html(deaglecalc3),$(".mag500").html(mag500calc4),railcalc2=rail+plvl*rail,m14calc3=m14+plvl*m14,winchcalc5=winch+plvl*winch,xbowcalc6=xbow+plvl*xbow,spxcalc7=spx+plvl*spx,railcalc2=Math.round(railcalc2),m14calc3=Math.round(m14calc3),winchcalc5=Math.round(winchcalc5),xbowcalc6=Math.round(xbowcalc6),spxcalc7=Math.round(spxcalc7),$(".rail").html(railcalc2),$(".m14").html(m14calc3),$(".winc").html(winchcalc5),$(".xbow").html(xbowcalc6),$(".spx").html(spxcalc7),sg500calc1=sg500+plvl*sg500,dbcalc2=db+plvl*db,m4calc3=m4+plvl*m4,sg500calc4=sg500+plvl*sg500,hzcalc5=hz12+plvl*hz12,sg500calc1=Math.round(sg500calc1),dbcalc2=Math.round(dbcalc2),m4calc3=Math.round(m4calc3),sg500calc4=Math.round(sg500calc4),hzcalc5=Math.round(hzcalc5),$(".sg1").html(sg500calc1),$(".dbs1").html(dbcalc2),$(".mcs1").html(m4calc3),$(".aa121").html(sg500calc4),$(".hz1").html(hzcalc5),sg500calc1b=sg500calc1*pelletsg,dbcalc2b=dbcalc2*pelletdb,m4calc3b=m4calc3*pelletsg,sg500calc4b=sg500calc4*pelletsg,hzcalc5b=hzcalc5*pellethz12,$(".sg2").html(sg500calc1b),$(".dbs2").html(dbcalc2b),$(".mcs2").html(m4calc3b),$(".aa122").html(sg500calc4b),$(".hz2").html(hzcalc5b),mp7calc1=mp7+plvl*mp7,mp5calc2=mp5+plvl*mp5,p90calc3=p90+plvl*p90,krisscalc4=kriss+plvl*kriss,mp7calc1=Math.round(mp7calc1),mp5calc2=Math.round(mp5calc2),p90calc3=Math.round(p90calc3),krisscalc4=Math.round(krisscalc4),$(".mp7").html(mp7calc1),$(".mp5").html(mp5calc2),$(".p90").html(p90calc3),$(".kris").html(krisscalc4)):(plvl=$("#perkLVL").val(),plvl*=.006,cstcalc1=cstl+plvl*cstl,cstcalc2=csth+plvl*csth,cstcalc3=cstm+plvl*cstm,katcalc1=kat1+plvl*kat1,katcalc2=kat2+plvl*kat2,pulcalc1=pull+plvl*pull,pulcalc2=pulh+plvl*pulh,pulcalc3=pulm+plvl*pulm,zweic1=zwel+plvl*zwel,zweic2=zweh+plvl*zweh,zweic3=zwem+plvl*zwem,evi1c=evil+plvl*evil,evihc=evih+plvl*evih,evimc=evim+plvl*evim,bclc=bcl+plvl*bcl,bchc=bch+plvl*bch,bcmc=bcm+plvl*bcm,vladc=vlad+plvl*vlad,cstcalc1=Math.round(cstcalc1),cstcalc2=Math.round(cstcalc2),cstcalc3=Math.round(cstcalc3),katcalc1=Math.round(katcalc1),katcalc2=Math.round(katcalc2),pulcalc1=Math.round(pulcalc1),pulcalc2=Math.round(pulcalc2),pulcalc3=Math.round(pulcalc3),zweic1=Math.round(zweic1),zweic2=Math.round(zweic2),zweic3=Math.round(zweic3),evi1c=Math.round(evi1c),evihc=Math.round(evih),evimc=Math.round(evim),bclc=Math.round(bclc),bchc=Math.round(bchc),bcmc=Math.round(bcmc),vladc=Math.round(vladc),$(".cst1").html(cstcalc1),$(".cst2").html(cstcalc2),$(".cst3").html(cstcalc3),$(".kat1").html(katcalc1),$(".kat2").html(katcalc2),$(".kat3").html(katcalc1),$(".pulv1").html(pulcalc1),$(".pulv2").html(pulcalc2),$(".pulv3").html(pulcalc3),$(".zwei1").html(zweic1),$(".zwei2").html(zweic2),$(".zwei3").html(zweic3),$(".evis1").html(evi1c),$(".evis2").html(evihc),$(".evis3").html(evimc),$(".bc1").html(bclc),$(".bc2").html(bchc),$(".bc3").html(bcmc),$(".ng1").html(vladc),$(".ng2").html(7*vladc),varmcalc1=varm+plvl*varm,akcalc2=ak47+plvl*ak47,scarcalc3=scar+plvl*scar,LMGcalc4=LMG+plvl*LMG,varmcalc1=Math.round(varmcalc1),akcalc2=Math.round(akcalc2),scarcalc3=Math.round(scarcalc3),LMGcalc4=Math.round(LMGcalc4),$(".res1").html(varmcalc1),$(".res2").html(akcalc2),$(".res3").html(scarcalc3),$(".LMG").html(LMGcalc4),grencalc1=grenp+plvl*grenp,m79calc2=m79+plvl*m79,rpgcalc3=rpg+plvl*rpg,c4calc4=c4+plvl*c4,grencalc1=Math.round(grencalc1),m79calc2=Math.round(m79calc2),rpgcalc3=Math.round(rpgcalc3),c4calc4=Math.round(c4calc4),grencalcb=7*grencalc1,$(".hx25").html(grencalc1),$(".hx25b").html(grencalcb),$(".m79").html(m79calc2),$(".rpg").html(rpgcalc3),$(".c4").html(c4calc4),$(".m16").html(m79calc2),hm9mmcalc=hm9mm+hm9mm*plvl,hmSMGcalc=hmSMG+hmSMG*plvl,hmShotcalc=hmShot+hmShot*plvl,hmARcalc=hmAR+hmAR*plvl,hm9mmcalc=Math.round(hm9mmcalc),hmSMGcalc=Math.round(hmSMGcalc),hmShotcalc=Math.round(hmShotcalc),hmARcalc=Math.round(hmARcalc),hmShotcalcb=6*hmShotcalc,$(".hm9mm").html(hm9mmcalc),$(".hmSMG").html(hmSMGcalc),$(".hmAR").html(hmShotcalc),$(".hmShota").html(hmARcalc),$(".hmShotb").html(hmShotcalcb),caulkcalc1=caulk+plvl*caulk,flamecalc2=flame+plvl*flame,microcalc3=micro+plvl*micro,incendcalc4=incend+plvl*incend,spitfirecalc5=spitfire+plvl*spitfire,caulkcalc1=Math.round(caulkcalc1),flamecalc2=Math.round(flamecalc2),microcalc3=Math.round(microcalc3),incendcalc4=Math.round(incendcalc4),tgcalc5=incendcalc4*pelletinc,spitfirecalc5=Math.round(spitfire),caulkcalc1a=.08*caulkcalc1,flamecalc2a=.08*flamecalc2,microcalc3a=.08*microcalc3,incendcalc4a=.07*incendcalc4,spitfirecalc5a=.07*spitfirecalc5,caulkcalc1a=Math.round(caulkcalc1a),flamecalc2a=Math.round(flamecalc2a),microcalc3a=Math.round(microcalc3a),incendcalc4a=Math.round(incendcalc4a),spitfirecalc5a=Math.round(spitfirecalc5a),$(".caulk").html(caulkcalc1),$(".flame").html(flamecalc2),$(".micro").html(microcalc3),$(".tg1").html(incendcalc4),$(".tg2").html(tgcalc5),$(".caulkaft").html(caulkcalc1a),$(".flameaft").html(flamecalc2a),$(".microaft").html(microcalc3a),$(".tgaft").html(incendcalc4a),$(".spit").html(spitfirecalc5),$(".spitaft").html(spitfirecalc5a),rev18calc1=rev18+plvl*rev18,m1911calc2=m1911+plvl*m1911,deaglecalc3=deagle+plvl*deagle,mag500calc4=mag500+plvl*mag500,winchcalc5=winch+plvl*winch,hmtpcalc6=hmtp+plvl*hmtp,grenpcalc7=grenp+plvl*grenp,rev18calc1=Math.round(rev18calc1),m1911calc2=Math.round(m1911calc2),deaglecalc3=Math.round(deaglecalc3),mag500calc4=Math.round(mag500calc4),winchcalc5=Math.round(winchcalc5),hmtpcalc6=Math.round(hmtpcalc6),grenpcalc7=Math.round(grenpcalc7),$(".rev1858").html(rev18calc1),$(".m19").html(m1911calc2),$(".de1").html(deaglecalc3),$(".mag500").html(mag500calc4),railcalc2=rail+plvl*rail,m14calc3=m14+plvl*m14,winchcalc5=winch+plvl*winch,xbowcalc6=xbow+plvl*xbow,spxcalc7=spx+plvl*spx,railcalc2=Math.round(railcalc2),m14calc3=Math.round(m14calc3),winchcalc5=Math.round(winchcalc5),xbowcalc6=Math.round(xbowcalc6),spxcalc7=Math.round(spxcalc7),$(".rail").html(railcalc2),$(".m14").html(m14calc3),$(".winc").html(winchcalc5),$(".xbow").html(xbowcalc6),$(".spx").html(spxcalc7),sg500calc1=sg500+plvl*sg500,dbcalc2=db+plvl*db,m4calc3=m4+plvl*m4,sg500calc4=sg500+plvl*sg500,hzcalc5=hz12+plvl*hz12,sg500calc1=Math.round(sg500calc1),dbcalc2=Math.round(dbcalc2),m4calc3=Math.round(m4calc3),sg500calc4=Math.round(sg500calc4),hzcalc5=Math.round(hzcalc5),$(".sg1").html(sg500calc1),$(".dbs1").html(dbcalc2),$(".mcs1").html(m4calc3),$(".aa121").html(sg500calc4),$(".hz1").html(hzcalc5),sg500calc1b=sg500calc1*pelletsg,dbcalc2b=dbcalc2*pelletdb,m4calc3b=m4calc3*pelletsg,sg500calc4b=sg500calc4*pelletsg,hzcalc5b=hzcalc5*pellethz12,$(".sg2").html(sg500calc1b),$(".dbs2").html(dbcalc2b),$(".mcs2").html(m4calc3b),$(".aa122").html(sg500calc4b),$(".hz2").html(hzcalc5b),mp7calc1=mp7+plvl*mp7,mp5calc2=mp5+plvl*mp5,p90calc3=p90+plvl*p90,krisscalc4=kriss+plvl*kriss,mp7calc1=Math.round(mp7calc1),mp5calc2=Math.round(mp5calc2),p90calc3=Math.round(p90calc3),krisscalc4=Math.round(krisscalc4),$(".mp7").html(mp7calc1),$(".mp5").html(mp5calc2),$(".p90").html(p90calc3),$(".kris").html(krisscalc4))});