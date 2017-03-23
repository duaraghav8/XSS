# XSS
Information Security Project (for College) demonstrating the 3 types of Cross Site Scripting vulnerabilities (Stored, Reflected, DOM)

**Mentor**: Professor Jatin Sethi - jsethi@ddn.upes.ac.in

**Team**:

    Shubhrika Maurya - Research & Documentation - shubhrika96@gmail.com
    
    Mridhul Bhambri - UI/UX Development - mridhul40@gmail.com
    
    Vatsal Jain - Implementation of Reflected XSS & Documentation - vatsal1511@gmail.com
    
    Raghav Dua - Implementation of Back-end API & Stored XSS - duaraghav8@gmail.com
    
**Technologies**:

  JavaScript - Core & JQuery on Front End, Node.js & Express.js on Back End
  
  EJS (Embedded JavaScript) templating engine
  
  HTML, Bootstrap
  
  Database: MongoDB
  

**Why is the site vulnerable?**

The vulnerability originates from the way we have used EJS.
For displaying submitting comments, we use <%- ... %> tags in EJS. Thus, Node simply does a text substitution. So any HTML tags are interpreted as HTML instead of plain text.

The vulnerability can be fixed if we replace those tags with:

<%= ... %>  (NOTICE THE '-' HYPHENE IS REPLACED BY '=' EQUAL TO)

This encodes the HTML tags, i.e., \<script\> becomes \&lt;script\&gt;


Update: Ours was declared the best Information Security Project amongst all presented by renowned Cyber Security Expert Rakshit Tandon during the inaugural ceremony of ISSA, Dehradun.

https://twitter.com/ChandraDevershi/status/733916026828521472
