import getHealth from '../app';

test('health status 1', ()=>{
    let result = getHealth({ name: 'Маг', health: 85 });
    
    expect(result).toBe('healthy');
});

test('health status 2', ()=>{
    let result = getHealth({ name: 'Маг', health: 50 });
    
    expect(result).toBe('healthy');
});

test('health status 3', ()=>{
    let result = getHealth({ name: 'Маг', health: 25 });
    
    expect(result).toBe('wounded');
});

test('health status 4', ()=>{
    let result = getHealth({ name: 'Маг', health: 15 });
    
    expect(result).toBe('wounded');
});

test('health status 5', ()=>{
    let result = getHealth({ name: 'Маг', health: 10 });
    
    expect(result).toBe('critical');
});