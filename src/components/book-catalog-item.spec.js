import { mount } from '@vue/test-utils'
import component from './book-catalog-item'

describe('unit test for book-catalog-item', () => {
    let wrapper, rndNumber
    beforeEach(() =>{
        wrapper = mount(component)
        rndNumber = Math.floor(Math.random()*10)
        wrapper.vm.counterClick = rndNumber
    })
    it('works', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.html()).toBeDefined();
        expect(wrapper.html()).toContain('Добавить');
    })
    it('method sendDataToCatalog is worked', () => {
        wrapper.vm.sendDataToCatalog()
        expect(wrapper.vm.counterClick).toBe(rndNumber+1);
    })
})