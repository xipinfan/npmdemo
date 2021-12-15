import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, ctx) {

    const buttonAlert = function(){
      alert('cnm!!!');
    }
    return () => (
      <>
        <button onClick={buttonAlert}>我不测试了测试个屁啊</button>
      </>
    )
  }
})
