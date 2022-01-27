import { mount } from '@vue/test-utils'
import component from './book-create'

describe('test book-create', () => {
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
    it('select is worked', async () => {
        const options = wrapper.find('select').findAll('option')
        await options.at(1).setSelected()
        expect(wrapper.find('option:checked').element.value).toBe("Видения")
        await options.at(5).setSelected()
        expect(wrapper.find('option:checked').element.value).toBe("Очерк")
    })
    it('method newBook is worked', () => {
        wrapper.vm.newBook()
        expect(wrapper.vm.submitted).toBe(false);
        expect(wrapper.vm.book).toBe({});
    })
})