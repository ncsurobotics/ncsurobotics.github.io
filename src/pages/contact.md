---
title: Contact us
discover:
  title: Contact us
permalink: /contact/index.html
description: Contact information
layout: page
---

<div class="grid" data-layout="50-50" style="height: 100%;">
  <p>
    {{ personal.address | striptags(true) | escape | nl2br }}
    <a href="mailto:{{ personal.email }}">
      {{ personal.email }}
    <a/>
  </p>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.9818593324067!2d-78.67657692502972!3d35.77193992498718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf59ddf9cbc51%3A0x6e61b8b2123bdb41!2sEngineering%20Building%20II!5e1!3m2!1sen!2sus!4v1750210944254!5m2!1sen!2sus" style="border:0; width: 100%; height: 100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
