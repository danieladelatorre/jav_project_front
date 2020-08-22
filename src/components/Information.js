import React, { useState, useEffect } from 'react';
//import { List, Header, Rating } from 'semantic-ui-react';
import Graphs from './graphs';
import {useTransition, animated} from 'react-spring';

const Information = () => {
    const positions=[[0, 0], [300, 0], [600, 0], [900, 0], [0, 200], [300, 200], [600, 200], [900, 200]];
    const [info, setInfo] = useState([]);
    const [dontDisplay, setDontDisplay] = useState(false);
    const [startXY, setStartXY] = useState(0);
    const [beginningXY, setBeginningXY] = useState(0);
    const [respectivePositions, setRespectivePositions] = useState({
        0:0, 
        1:0, 
        2:0, 
        3:0, 
        4:0, 
        5:0, 
        6:0, 
        7:0, 
        8:0, 
        9:0, 
        10:0, 
        11:0, 
        12:0, 
        13:0
    });
    const [deletedXY, setDeletedXY] = useState(0);
    const [useDeleted, setUseDeleted] = useState(false);
    const [isGender, setIsGender] = useState(false);
    const [isSsc_p, setIsSsc_p] = useState(false);
    const [isSsc_b, setIsSsc_b] = useState(false);
    const [isHsc_p, setIsHsc_p] = useState(false);
    const [isHsc_b, setIsHsc_b] = useState(false);
    const [isHsc_s, setIsHsc_s] = useState(false);
    const [isDegree_p, setIsDegree_p] = useState(false);
    const [isDegree_t, setIsDegree_t] = useState(false);
    const [isWorkex, setIsWorkex] = useState(false);
    const [isEtest_p, setIsEtest_p] = useState(false);
    const [isSpecialisation, setIsSpecialisation] = useState(false);
    const [isMba_p, setIsMba_p] = useState(false);
    const [isStatus, setIsStatus] = useState(false);
    const [isSalary, setIsSalary] = useState(false);
    let temp_positions;

    useEffect(() => {
        fetch('/reveal')
        .then(response => response.json())
        .then(data => {setInfo(data.Information)})
    }, []);

    const graphTransitions = useTransition(isGender, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const ssc_pTransitions = useTransition(isSsc_p, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const ssc_bTransitions = useTransition(isSsc_b, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const hsc_pTransitions = useTransition(isHsc_p, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const hsc_bTransitions = useTransition(isHsc_b, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const hsc_sTransitions = useTransition(isHsc_s, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const degree_pTransitions = useTransition(isDegree_p, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const degree_tTransitions = useTransition(isDegree_t, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const workexTransitions = useTransition(isWorkex, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const etest_pTransitions = useTransition(isEtest_p, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const specialisationTransitions = useTransition(isSpecialisation, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const mba_pTransitions = useTransition(isMba_p, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const statusTransitions = useTransition(isStatus, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    const salaryTransitions = useTransition(isSalary, null, {
        from: { opacity: 0, transform: 'translateX(-100px) translateY(100px)' },
        enter: { opacity: 1, transform: `translateX(${positions[startXY][0]}px) translateY(${positions[startXY][1]}px)` },
        leave: { opacity: 0, transform: 'translateX(-100px) translateY(100px)'},
    })

    return(
        <div className="text-center bg-pink-200 w-full h-full">
            <h1 className="p-3">
                Welcome to the Graphs Page!
            </h1>
            <div>
                This page takes the data and transforms it into graphs. (NOTE: You are only allowed to display 8 graphs at a time!)
            </div>
            <div className="p-5">
                Click any of the boxes to see the corresponding graph:
            </div>
            <form className="flex-wrap items-center content-around">
                <div className="border-t flex justify-between p-2 block">
                    <label>
                    gender:
                    <input
                        name="Gender"
                        type="checkbox"
                        checked={isGender}
                        onChange={() => {
                            setIsGender(!isGender);
                            if(dontDisplay){
                                setIsGender(false);
                            }
                            if(!isGender){  //if show graph on
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[0] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[0] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(0);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>

                    <label>
                    ssc_p:
                    <input
                        name="Ssc_p"
                        type="checkbox"
                        checked={isSsc_p}
                        onChange={() => {
                            setIsSsc_p(!isSsc_p)
                            if(dontDisplay){
                                setIsSsc_p(false);
                            }
                            if(!isSsc_p){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[1] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[1] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(1);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>

                    <label>
                    ssc_b:
                    <input
                        name="Ssc_b"
                        type="checkbox"
                        checked={isSsc_b}
                        onChange={() => {
                            setIsSsc_b(!isSsc_b);
                            if(dontDisplay){
                                setIsSsc_b(false);
                            }
                            if(!isSsc_b){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[2] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[2] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(2);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>

                    <label>
                    hsc_p:
                    <input
                        name="Hsc_p"
                        type="checkbox"
                        checked={isHsc_p}
                        onChange={() => {
                            setIsHsc_p(!isHsc_p);
                            if(dontDisplay){
                                setIsHsc_p(false);
                            }
                            if(!isHsc_p){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[3] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[3] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(3);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>

                    <label>
                    hsc_b:
                    <input
                        name="Hsc_b"
                        type="checkbox"
                        checked={isHsc_b}
                        onChange={() => {
                            setIsHsc_b(!isHsc_b);
                            if(dontDisplay){
                                setIsHsc_b(false);
                            }
                            if(!isHsc_b){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[4] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[4] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(4);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>
                    
                    <label>
                    hsc_s:
                    <input
                        name="Hsc_s"
                        type="checkbox"
                        checked={isHsc_s}
                        onChange={() => {
                            setIsHsc_s(!isHsc_s);
                            if(dontDisplay){
                                setIsHsc_s(false);
                            }
                            if(!isHsc_s){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[5] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[5] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(5);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>

                    <label>
                    degree_p:
                    <input
                        name="Degree_p"
                        type="checkbox"
                        checked={isDegree_p}
                        onChange={() => {
                            setIsDegree_p(!isDegree_p);
                            if(dontDisplay){
                                setIsDegree_p(false);
                            }
                            if(!isDegree_p){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[6] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[6] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(6);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>
                </div>
                <div className="border-t border-b flex justify-between p-3">
                    <label>
                    degree_t:
                    <input
                        name="Degree_t"
                        type="checkbox"
                        checked={isDegree_t}
                        onChange={() => {
                            setIsDegree_t(!isDegree_t);
                            if(dontDisplay){
                                setIsDegree_t(false);
                            }
                            if(!isDegree_t){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[7] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[7] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(7);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>

                    <label>
                    workex:
                    <input
                        name="Workex"
                        type="checkbox"
                        checked={isWorkex}
                        onChange={() => {
                            setIsWorkex(!isWorkex);
                            if(dontDisplay){
                                setIsWorkex(false);
                            }
                            if(!isWorkex){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[8] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[8] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(8);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>

                    <label>
                    etest_p:
                    <input
                        name="Etest_p"
                        type="checkbox"
                        checked={isEtest_p}
                        onChange={() => {
                            setIsEtest_p(!isEtest_p);
                            if(dontDisplay){
                                setIsEtest_p(false);
                            }
                            if(!isEtest_p){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[9] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[9] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(9);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>

                    <label>
                    specialisation:
                    <input
                        name="Specialisation"
                        type="checkbox"
                        checked={isSpecialisation}
                        onChange={() => {
                            setIsSpecialisation(!isSpecialisation);
                            if(dontDisplay){
                                setIsSpecialisation(false);
                            }
                            if(!isSpecialisation){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[10] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[10] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(10);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>

                    <label>
                    mba_p:
                    <input
                        name="Mba_p"
                        type="checkbox"
                        checked={isMba_p}
                        onChange={() => {
                            setIsMba_p(!isMba_p);
                            if(dontDisplay){
                                setIsMba_p(false);
                            }
                            if(!isMba_p){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[11] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[11] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(11);
                                setDontDisplay(false);
                            }
                            console.log(startXY);
                        }} />
                    </label>

                    <label>
                    status:
                    <input
                        name="Status"
                        type="checkbox"
                        checked={isStatus}
                        onChange={() => {
                            setIsStatus(!isStatus);
                            if(dontDisplay){
                                setIsStatus(false);
                            }
                            if(!isStatus){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[12] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[12] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(12);
                                setDontDisplay(false);
                            }
                            console.log(startXY);
                        }} />
                    </label>

                    <label>
                    salary:
                    <input
                        name="Salary"
                        type="checkbox"
                        checked={isSalary}
                        onChange={() => {
                            setIsSalary(!isSalary);
                            if(dontDisplay){
                                setIsSalary(false);
                            }
                            if(!isSalary){
                                temp_positions = respectivePositions;
                                if(useDeleted){ //if we previously deleted
                                    setStartXY(deletedXY);
                                    setUseDeleted(false);
                                    temp_positions[13] = deletedXY; 
                                    setRespectivePositions(temp_positions)
                                } else {
                                    setStartXY(beginningXY);
                                    if(beginningXY<positions.length-1){
                                        setBeginningXY(beginningXY+1);
                                    } else {
                                        setDontDisplay(true);
                                    }
                                    temp_positions[13] = beginningXY;
                                }
                            } else{         //if show graph off
                                setUseDeleted(true);
                                setDeletedXY(13);
                                setDontDisplay(false);
                            }
                        }} />
                    </label>
                </div>
            </form>
            {
                graphTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="gender" type_of="string"/>
                </animated.div>)
            }
            {
                ssc_pTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="ssc_p" type_of="number"/>
                </animated.div>)
            }
            {
                ssc_bTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="ssc_b" type_of="string"/>
                </animated.div>)
            }
            {
                hsc_pTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="hsc_p" type_of="number"/>
                </animated.div>)
            }
            {
                hsc_bTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="hsc_b" type_of="string"/>
                </animated.div>)
            }
            {
                hsc_sTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="hsc_s" type_of="string"/>
                </animated.div>)
            }
            {
                degree_pTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="degree_p" type_of="number"/>
                </animated.div>)
            }
            {
                degree_tTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="degree_t" type_of="string"/>
                </animated.div>)
            }
            {
                workexTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="workex" type_of="string"/>
                </animated.div>)
            }
            {
                etest_pTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="etest_p" type_of="number"/>
                </animated.div>)
            }
            {
                specialisationTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="specialisation" type_of="string"/>
                </animated.div>)
            }
            {
                mba_pTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="mba_p" type_of="number"/>
                </animated.div>)
            }
            {
                statusTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="status" type_of="string"/>
                </animated.div>)
            }
            {
                salaryTransitions.map(({ item, key, props }) => 
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed justify-between p-3"
                >
                    <Graphs info={info} stringss="salary" type_of="number"/>
                </animated.div>)
            }
            
        </div>
        /*<List>
            {info.map(item => {
                return(
                    <List.Item key={item.sl_no}>
                        <Header>Person {item.sl_no} </Header>
                        <Rating rating={item.sl_no} maxRating={10} disabled />
                    </List.Item>
                )
            })}
        </List>*/
    )
}

export default Information;