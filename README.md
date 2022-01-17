# Uni Tabs example for React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

Check out demo [here](https://uiwebkit.github.io/tabs-react/)

Check out our docs [here](https://uiwebkit.com/wgt/tabs/1/)

### Add to index.html

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/mat@2.0.0-8/dist/mat.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/udk@2.0.0-20/dist/udk.esm.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@uiwebkit/tabs@1.0.0/dist/tabs/tabs.esm.js"></script>
```

#### Specify value for the tabs as JSON string

```jsx
<uni-tabs value={'[{"label": "Tab 1"}, {"label": "Tab 2"}]'}>
  <uni-template hidden={true}>
    <div>Tab Content 1</div>
    <div>Tab Content 2</div>
  </uni-template>
</uni-tabs>
```

#### or specify url to the tabs JSON file (ex. tabs.json) or to the backend API endpoint

```jsx
<uni-event-load url={'tabs.json'} prop={'value'}>
  <uni-tabs>
    <uni-template hidden={true}>
      <div>Tab 1 Content</div>
      <div>Tab 2 Content</div>
    </uni-template>
  </uni-tabs>
</uni-event-load>
```

#### Next-Gen Customization (with Store)

```jsx
<uni-store-set path={'tab.store'} state={1}/>

<uni-tabs>
  <uni-tab-bar mini={true}>
    <uni-event-store-set listen={'click'} path={'tab.store'} state={0}>
      <uni-event-store-get path={'tab.store'} equal={0} prop={'active'}>
        <uni-tab 
            value={'Tab 1'}
            icon={'favorite'}
            icon-type={'two-tone'}
            angle={270}
        />
      </uni-event-store-get>
    </uni-event-store-set>

    <uni-event-store-set listen={'click'} path={'tab.store'} state={1}>
      <uni-tab only={true}>
        <uni-tab-content>
          <uni-tab-icon icons="fa" type={'brands'} name={'font-awesome'}/>

            <uni-tab-text-label>Tab 2</uni-tab-text-label>

            <uni-event-store-get path="tab.store" equal={1} prop={'active'}>
              <uni-tab-indicator/>
            </uni-event-store-get>
        </uni-tab-content>

        <uni-tab-ripple/>
      </uni-tab>
    </uni-event-store-set>
  </uni-tab-bar>

  <uni-store-display path={'tab.store'} equal={0} hidden={true}>
    Tab 1 Content
  </uni-store-display>

  <uni-store-display path={'tab.store'} equal={1} hidden={true}>
    Tab 2 Content
  </uni-store-display>
</uni-tabs>
```

#### Next-Gen Customization (with routes)

```jsx
<uni-router shadow={true}/>
<uni-router-link activate={true} params="custom=1"/>

<uni-tabs>
  <uni-tab-bar>
    <uni-router-link params={'custom=1'}>
      <uni-route params={'custom=1'} prop={'active'}>
        <uni-tab
            value={'Tab 1'}
            icon={'favorite'}
            icon-type={'two-tone'}
            angle={270}
        />
      </uni-route>
    </uni-router-link>

    <uni-router-link params={'custom=2'}>
      <uni-route params={'custom=2'} prop={'active'}>
        <uni-tab only={true}>
          <uni-tab-content>
            <uni-tab-icon
                icons={'fa'}
                type={'brands'}
                name={'font-awesome'}
            />

            <uni-tab-text-label value={'Tab 2'}/>

            <uni-route params={'custom=2'} prop={'active'}>
              <uni-tab-indicator/>
            </uni-route>
          </uni-tab-content>

          <uni-tab-ripple/>
        </uni-tab>
      </uni-route>
    </uni-router-link>
  </uni-tab-bar>

  <uni-route-display params={'custom=1'} hidden={true}>
    Tab 1 Content
  </uni-route-display>

  <uni-route-display params={'custom=2'} hidden={true}>
    Tab 2 Content
  </uni-route-display>
</uni-tabs>
```
