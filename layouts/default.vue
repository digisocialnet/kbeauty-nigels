<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
.step-number {
  top: 20px;
  right: 20px;
  margin-right: 12px;
  position: absolute;
  font-size: 1.5rem;
  background: #1d3c65;
  padding: 6px 18px;
  border-radius: 50%;
  display: inline-block;
  color: #fff;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}
.steps {
  margin-top: 0;
  padding: calc(24px + 2vw);
  font-weight: 200;
}
.slide-enter-active,
.slide-leave-active {
  overflow-y: hidden;
  max-height: 800px;
  transition-property: all;
  transition-duration: 0.5s;
  transition-delay: 0.2s;
  transition-timing-function: ease-out;
}
.slide-enter,
.slide-leave-to {
  max-height: 0;
  transition-property: all;
  transition-duration: 0.5s;
  transition-delay: 0.25s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
footer .button {
  margin: 6px 3px;
}
footer {
  background: #feeae9;
}
.notification.intro {
  background-color: #fff;
  margin: 18px;
}
.notification {
  padding: 36px;
  color: #b19998;
  flex: 1 0 auto;
  margin-bottom: 12px;
  margin-left: 6px;
  margin-right: 6px;
}
a.button span {
  color: #7a707a;
  font-weight: 700;
}
.is-pink {
  background: #feeae9;
}
.step .title {
  font-size: calc(20px + 1.7vw);
}
.grid-sizer {
  height: 200px;
}
figure {
  margin-bottom: 16px;
}
figure img {
  border-radius: 8px;
  background: #fff;
  padding: 12px;
  border: 2px solid #feeae9;
  pointer-events: none;
}
.expand,
.active {
  width: 100%;
  transform: scale3d(20);
  transition: 0.4s all;
}
.is-pink-outline {
  border: 2px solid #feeae9;
  border-radius: 18px;
  background: #fff;
  transition: 0.6s background-color ease-in, 1s border-color ease-in-out,
    0.4s transform ease;
}
.is-pink-outline:hover {
  background: #fef3f2;
  border: 2px solid #ffcdca;
  transition: 1.3s background-color ease-out, 0.3s border-color ease-in-out,
    0.2s transform cubic-bezier(0, 1, 0.5, 1);
  transform: scale(1.03);
  z-index: 100;
}
</style>
