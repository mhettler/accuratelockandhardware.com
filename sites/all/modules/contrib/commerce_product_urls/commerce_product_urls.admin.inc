<?php

/**
 * @file
 * Admin page callbacks for the Commerce Product URLs module.
 */

/**
 * Form constructor for the realm settings form.
 */
function commerce_product_urls_settings_form($form, &$form_state) {
  $form = array();

  $form['commerce_product_urls_update_url'] = array(
    '#type' => 'checkbox',
    '#title' => t('Update page URL on attribute change'),
    '#default_value' => variable_get('commerce_product_urls_update_url', FALSE),
    '#description' => t('Dynamically update product display page URL when selected value of any of the product fields enabled as an attribute field on <em>Add to Cart</em> forms changes.'),
  );

  return system_settings_form($form);
}
