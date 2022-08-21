import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { ImFacebook2, ImInstagram } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';


export const Footer = () => {
  return (
    <section className='footer'>
        <div className="container flex justConSpBetween">
            <div className='col25'>
                <h6>Lorem ipsum</h6>
                <ul class="footer-list">
					<li><a class="link-inverted" href="/">New images</a></li>
					<li><a class="link-inverted" href="/">The most popular content</a></li>
					<li><a class="link-inverted" href="/">Search trends</a></li>
					<li><a class="link-inverted" href="/">Blog</a></li>
				</ul>
            </div>
            <div className='col25'>
                <h6>Lorem ipsum</h6>
                <ul class="footer-list">
					<li><a class="link-inverted" href="/">New images</a></li>
					<li><a class="link-inverted" href="/">The most popular content</a></li>
					<li><a class="link-inverted" href="/">Search trends</a></li>
					<li><a class="link-inverted" href="/">Blog</a></li>
				</ul>
            </div>
            <div className='col25'>
                <h6>Lorem ipsum</h6>
                <ul class="footer-list">
					<li><a class="link-inverted" href="/">New images</a></li>
					<li><a class="link-inverted" href="/">The most popular content</a></li>
					<li><a class="link-inverted" href="/">Search trends</a></li>
					<li><a class="link-inverted" href="/">Blog</a></li>
				</ul>
                {/* <h6>Lorem ipsum</h6>
                <ul class="footer-list">
					<li><a class="link-inverted" href="/">Search trends</a></li>
					<li><a class="link-inverted" href="/">Blog</a></li>
				</ul> */}
            </div>
            <div className='col25'>
                <h6>Social Media</h6>
                <ul class="footer-list iconbs">
					<li><a class="link-inverted" href="/"><ImFacebook2 /></a></li>
					<li><a class="link-inverted" href="/"><BsLinkedin /></a></li>
                    <li><a class="link-inverted" href="/"><FaTwitterSquare /></a></li>
					<li><a class="link-inverted" href="/"><ImInstagram/></a></li>
				</ul>
            </div>
        </div>
        <div className='copyright'>Copyright ©  2010-2022 Freepik Company S.L. All rights reserved.</div>
    </section>
  )
}
