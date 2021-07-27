describe('FEATURE: Have a way to count donuts', () => {
    describe('Can add to donut count', () => {
        let underTest;

        beforeEach(() =>{
            underTest = new DonutMaker();
        })

        it('should start with a click count of 0.' , ()=>{
            expect(underTest.clickCount).toBe(0);
        })
        it('Can retrieve a donut count.', () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
        })
        it('Can retrieve 2 as a donut count if 2 clicks recorded', ()=>{
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.clickCount).toBe(2);
        })
    });
});

describe('Be able to purchase the first Auto Clicker with 100 donuts from your donut', () => {
    let underTest;

    beforeEach(() =>{
        underTest = new DonutMaker();
    })

it('Auto Clicker count starts at 0.', () => {
    expect(underTest.autoClickerCount).toBe(0);
})

it('Can Add and Retrieve an Auto Clicker count.', () => {
    expect(underTest.autoClickerCount).toBe(1);
})

it('Subtract the Auto Clicker cost from your donut count.', ()=> {
    underTest.addToAutoClickerCount();
    expect(underTest.clickCount).toBe(-100);
})



});